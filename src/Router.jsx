import { Navigate, Route, Routes } from "react-router-dom";
import DashboardOverview from "../src/app/(main)/dashboard/page";
import CalendarPage from "./app/(main)/dashboard/calendar/page";
import ClubOverview from "./app/(main)/dashboard/club/page";
import CommissionsPage from "./app/(main)/dashboard/commissions/page";
import ComplianceDashboardPage from "./app/(main)/dashboard/compliance/page";
import DealsPage from "./app/(main)/dashboard/deals/page";
import IntroducerOverview from "./app/(main)/dashboard/introducer/page";
import MessagesPage from "./app/(main)/dashboard/messages/page";
import RegisterPage from "./app/(main)/register/page";
import PlayerOverview from "./app/(main)/dashboard/player/page";
// import VerificationPending from "./components/verification-pending/page";
import PlayersPage from "./app/(main)/dashboard/players/page";
import ScoutOverview from "./app/(main)/dashboard/scout/page";
import SettingsPage from "./app/(main)/dashboard/settings/page";
import DocumentsPage from "./app/(main)/dashboard/documents/page";
import ScoutReports from "./app/(main)/dashboard/scout/reports/page";
import ScoutWatchlist from "./app/(main)/dashboard/scout/watchlist/page";
import ScoutFees from "./app/(main)/dashboard/scout/fees/page";
import RepOverview from "./app/(main)/dashboard/rep/page";
import RepRoster from "./app/(main)/dashboard/rep/roster/page";
import CareerPlannerPage from "./app/(main)/dashboard/rep/career/page";
import BrandManagementPage from "./app/(main)/dashboard/rep/brand/page";
import IntroductionsPage from "./app/(main)/dashboard/introducer/introductions/page";
import IntroducerNetworkPage from "./app/(main)/dashboard/introducer/network/page";
import { AuthContext } from "./Context/authContext";
import { useContextHook } from "use-context-hook";
import LoginPage from "./app/(main)/login/page";

const roleNavItems = {
  agent: [
    { href: "/dashboard", page: <DashboardOverview /> },
    { href: "/dashboard/players", page: <PlayersPage /> },
    { href: "/dashboard/deals", page: <DealsPage /> },
    { href: "/dashboard/commissions", page: <CommissionsPage /> },
    { href: "/dashboard/network", page: <ClubOverview /> },
    { href: "/dashboard/documents", page: <DocumentsPage /> },
    { href: "/dashboard/calendar", page: <CalendarPage /> },
    { href: "/dashboard/compliance", page: <ComplianceDashboardPage /> },
    { href: "/dashboard/messages", page: <MessagesPage /> },
    { href: "/dashboard/settings", page: <SettingsPage /> },
  ],
  scout: [
    { href: "/dashboard/scout", page: <ScoutOverview /> },
    { href: "/dashboard/scout/reports", page: <ScoutReports /> },
    { href: "/dashboard/scout/watchlist", page: <ScoutWatchlist /> },
    { href: "/dashboard/scout/fees", page: <ScoutFees /> },
    { href: "/dashboard/messages", page: <MessagesPage /> },
    { href: "/dashboard/settings", page: <SettingsPage /> },
  ],
  representative: [
    { href: "/dashboard/rep", page: <RepOverview /> },
    { href: "/dashboard/rep/roster", page: <RepRoster /> },
    { href: "/dashboard/rep/career", page: <CareerPlannerPage /> },
    { href: "/dashboard/rep/brand", page: <BrandManagementPage /> },
    { href: "/dashboard/messages", page: <MessagesPage /> },
    { href: "/dashboard/settings", page: <SettingsPage /> },
  ],
  introducer: [
    { href: "/dashboard/introducer", page: <IntroducerOverview /> },
    {
      href: "/dashboard/introducer/introductions",
      page: <IntroductionsPage />,
    },
    { href: "/dashboard/introducer/network", page: <IntroducerNetworkPage /> },
    { href: "/dashboard/messages", page: <MessagesPage /> },
    { href: "/dashboard/settings", page: <SettingsPage /> },
  ],
  // player: [
  //   { href: "/dashboard/player", page: "Overview" },
  //   { href: "/dashboard/player/profile", page: "My Profile" },
  //   { href: "/dashboard/player/opportunities", page: "Opportunities" },
  //   { href: "/dashboard/player/contracts", page: "My Contracts" },
  //   { href: "/dashboard/messages", page: <MessagesPage /> },
  //   { href: "/dashboard/settings", page: <SettingsPage /> },
  // ],
  // club: [
  //   { href: "/dashboard/club", page: "Overview" },
  //   { href: "/dashboard/club/search", page: "Player Search" },
  //   { href: "/dashboard/club/submissions", page: "Submissions" },
  //   { href: "/dashboard/club/wishlist", page: "Wish List" },
  //   { href: "/dashboard/messages", page: <MessagesPage /> },
  //   { href: "/dashboard/settings", page: <SettingsPage /> },
  // ],
};

const Router = () => {
  function PublicRoute({ children, redirectTo, isLoggedIn }) {
    return isLoggedIn ? <Navigate to={redirectTo} /> : children;
  }

  function PrivateRoute({ children, redirectTo, isLoggedIn }) {
    return isLoggedIn ? children : <Navigate to={redirectTo} />;
  }

  const { isLoggedIn } = useContextHook(AuthContext, ["isLoggedIn"]);
  const redirectTo = "/";
  const userType = "agent";

  return (
    <Routes>
      {roleNavItems[userType]?.map((data, index) => (
        <Route
          key={index}
          path={data?.href}
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
              {data?.page}
            </PrivateRoute>
          }
        />
      ))}

      <Route
        path="/dashboard/*"
        element={<Navigate to="/dashboard" replace />}
      />

      <Route
        path="/login"
        element={
          <PublicRoute isLoggedIn={isLoggedIn} redirectTo="/dashboard">
            <LoginPage />
          </PublicRoute>
        }
      />

      {/* <Route
        path="/verification-pending"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <VerificationPending />
          </PrivateRoute>
        }
      /> */}

      <Route
        path="/register"
        element={
          <PublicRoute isLoggedIn={isLoggedIn} redirectTo="/dashboard">
            <RegisterPage />
          </PublicRoute>
        }
      />
      {/* <Route
        path="/verify-email"
        element={
          <PublicRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <VerifyEmailPage />
          </PublicRoute>
        }
      /> */}
      {/* <Route
        path="/dashboard"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <DashboardOverview />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/calender"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <CalendarPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/club"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <ClubOverview />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/commissions"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <CommissionsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/compliance"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <ComplianceDashboardPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/deals"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <DealsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/introducer"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <IntroducerOverview />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/messages"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <MessagesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/network"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <NetworkPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/player"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <PlayerOverview />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/players"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <PlayersPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/scout"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <ScoutOverview />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/settings"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo={redirectTo}>
            <SettingsPage />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
};

export default Router;
