import { useEffect, useState } from "react";
import { Fetch } from "../helpers/fetchWrapper";
import { useCancellablePromise } from "../helpers/promiseHandler";

const STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const agencyService = {
  _url: process.env.NEXT_PUBLIC_BASE_API_URL,

  GetAllAgencies(currentPage, fetch) {
    const [data, setsData] = useState([]);
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getAllAgencies(currentPage))
        .then((res) => {
          setsData(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [currentPage, fetch]);

    return {
      _agencies_loading: status === STATUS.LOADING,
      _error: status === STATUS.ERROR,
      _agencies_data: data,
    };
  },

  async getAllAgencies(currentPage) {
    return await Fetch.get(
      `${this._url}/agency/get-all-agencies?page=${currentPage}&itemsPerPage=18`,
    );
  },

  GetAgencies(fetch) {
    const [data, setsData] = useState([]);
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getAgencies())
        .then((res) => {
          setsData(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [fetch]);

    return {
      _agencies_loading: status === STATUS.LOADING,
      _error: status === STATUS.ERROR,
      _agencies_data: data,
    };
  },

  async getAgencies() {
    return await Fetch.get(`${this._url}/agency/get-all`);
  },

  GetAgencyDetails(id, fetch) {
    const [data, setsData] = useState([]);
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getAgencyDetails(id))
        .then((res) => {
          setsData(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [id, fetch]);

    return {
      _agencies_loading: status === STATUS.LOADING,
      _error: status === STATUS.ERROR,
      _agencies_data: data,
    };
  },

  async getAgencyDetails(id) {
    return await Fetch.get(`${this._url}/agency/get-single-agency/${id}`);
  },

  async addAgency(payload) {
    return await Fetch.post(`${this._url}/agency/create`, payload);
  },

  async updateAgency(id, payload) {
    return await Fetch.put(`${this._url}/agency/update/${id}`, payload);
  },

  async deleteAgency(id) {
    return await Fetch.delete(`${this._url}/agency/delete/${id}`);
  },
};
export default agencyService;
