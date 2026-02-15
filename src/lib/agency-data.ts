import agenciesBasic from "@/data/agencies.json";

let agenciesEnriched: Record<string, unknown>[] | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const enrichedData = require("@/data/agencies-enriched.json");
  if (Array.isArray(enrichedData)) agenciesEnriched = enrichedData;
} catch {
  agenciesEnriched = null;
}

export interface Agency {
  name: string;
  tagline: string;
  slug: string;
  country: string;
  value: string;
  href: string;
  // Enriched fields
  about?: string;
  keyPeople?: { name: string; role: string }[];
  risingTalents?: string[];
  notableDeals?: { year?: string; description: string }[];
  services?: string[];
  partnerNetwork?: string;
  // Parsed from alsoKnownAs
  founded?: string;
  hq?: string;
  playerCount?: number;
  languages?: string[];
  regions?: string[];
  email?: string;
  website?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  lastVerified?: string;
}

function parseAlsoKnownAs(raw: string): Partial<Agency> {
  const result: Partial<Agency> = {};
  if (!raw) return result;

  const foundedMatch = raw.match(/Founded:\s*(\d{4})/i);
  if (foundedMatch) result.founded = foundedMatch[1];

  const hqMatch = raw.match(/Headquarters?:\s*([^\n]+?)(?:\s*FIFA|\s*Players|\s*Language|\s*Region|\s*Email|$)/i);
  if (hqMatch) result.hq = hqMatch[1].trim();

  const playerMatch = raw.match(/Players\s*[:\u2248≈]\s*(\d[\d,]*)/i);
  if (playerMatch) result.playerCount = parseInt(playerMatch[1].replace(/,/g, ""));

  const langMatch = raw.match(/Languages?:\s*([^\n]+?)(?:\s*Regions?|\s*Email|$)/i);
  if (langMatch) result.languages = langMatch[1].split(/[,;]/).map(s => s.trim()).filter(Boolean).slice(0, 8);

  const emailMatch = raw.match(/[\w.-]+@[\w.-]+\.\w+/);
  if (emailMatch) result.email = emailMatch[0];

  const instaMatch = raw.match(/instagram\.com\/[\w.-]+/i);
  if (instaMatch) result.instagram = `https://www.${instaMatch[0]}`;

  const twitterMatch = raw.match(/(?:x\.com|twitter\.com)\/[\w.-]+/i);
  if (twitterMatch) result.twitter = `https://www.${twitterMatch[0]}`;

  const linkedinMatch = raw.match(/linkedin\.com\/company\/[\w.-]+/i);
  if (linkedinMatch) result.linkedin = `https://www.${linkedinMatch[0]}`;

  return result;
}

function normalizeAgency(basic: Record<string, unknown>, enriched?: Record<string, unknown>): Agency {
  const merged = { ...basic, ...enriched } as Record<string, unknown>;
  const agency = { ...merged } as unknown as Agency;

  // Parse alsoKnownAs if present
  if (typeof merged.alsoKnownAs === "string") {
    const parsed = parseAlsoKnownAs(merged.alsoKnownAs);
    Object.assign(agency, { ...parsed, ...Object.fromEntries(Object.entries(agency).filter(([, v]) => v !== undefined)) });
    // Only overwrite if not already set
    for (const [k, v] of Object.entries(parsed)) {
      if (!(agency as unknown as Record<string, unknown>)[k]) {
        (agency as unknown as Record<string, unknown>)[k] = v;
      }
    }
  }

  // Normalize services: string -> array
  if (typeof merged.services === "string") {
    agency.services = (merged.services as string).split(/[;]/).map(s => s.trim()).filter(Boolean);
  }

  // Normalize notableDeals
  if (Array.isArray(merged.notableDeals)) {
    agency.notableDeals = merged.notableDeals.map((d: unknown) => {
      if (typeof d === "string") return { description: d };
      return d as { year?: string; description: string };
    });
  }

  // Normalize risingTalents
  if (Array.isArray(merged.risingTalents)) {
    agency.risingTalents = merged.risingTalents.map((t: unknown) => typeof t === "string" ? t : String(t));
  }

  return agency;
}

export function getAllAgencies(): Agency[] {
  if (!agenciesEnriched) return agenciesBasic as unknown as Agency[];

  const enrichedMap = new Map<string, Record<string, unknown>>();
  for (const a of agenciesEnriched) {
    enrichedMap.set(a.slug as string, a);
  }

  return agenciesBasic.map((a) => normalizeAgency(a, enrichedMap.get(a.slug)));
}

export function getAgencyBySlug(slug: string): Agency | undefined {
  return getAllAgencies().find((a) => a.slug === slug);
}

export function getSimilarAgencies(agency: Agency, count = 3): Agency[] {
  const all = getAllAgencies().filter((a) => a.slug !== agency.slug);
  const sameCountry = all.filter((a) => a.country === agency.country);
  const others = all.filter((a) => a.country !== agency.country);
  return [...sameCountry, ...others].slice(0, count);
}

export function getProfileCompleteness(agency: Agency): number {
  const fields = [
    agency.about, agency.founded, agency.hq, agency.website,
    agency.keyPeople?.length, agency.services?.length,
    agency.notableDeals?.length, agency.email, agency.linkedin,
  ];
  const filled = fields.filter(Boolean).length;
  return Math.round(((4 + filled) / (4 + fields.length)) * 100);
}
