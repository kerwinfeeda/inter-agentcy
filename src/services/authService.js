import { Fetch } from "../helpers/fetchWrapper";

const authService = {
  auth_url: process.env.NEXT_PUBLIC_BASE_API_URL,
  /**
   * Hooks
   */

  async login(payload) {
    return await Fetch.post(`${this.auth_url}/auth/login`, payload);
  },
  async verify(payload) {
    let res = await Fetch.get(`${this.auth_url}/auth/verify-email`, payload);
    console.log(res, "verify-res");
    if (res.success) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
  async ChangePassword(payload) {
    let res = await Fetch.patch(`${this.auth_url}/change-password`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
  async register(payload) {
    return await Fetch.post(`${this.auth_url}/user/register`, payload);
  },
  async getCurrentAdmin() {
    return Fetch.get(`${this.auth_url}/auth/get-user-detail`);
  },
  async updateUser(id, values) {
    let res = await Fetch.put(`${this.auth_url}/user/onboard/${id}`, values);
    if (res.success) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },

  async removeAdminJwt() {
    let res = await Fetch.delete(`${this.auth_url}/auth/logout`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? "Something went wrong");
  },
};
export default authService;
