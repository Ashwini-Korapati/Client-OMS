// src/services/httpHandler.js

import axios from "axios";
import { API } from "../config";


const axiosInstance = axios.create({
  baseURL: API,
  withCredentials: true, // 👈 Important for sending cookies
});


// Show loading on request
axiosInstance.interceptors.request.use(
  (config) => {
    if (window.loadingContext) window.loadingContext.showLoading();
    return config;
  },
  (error) => {
    if (window.loadingContext) window.loadingContext.hideLoading();
    return Promise.reject(error);
  }
);

// Hide loading on response
axiosInstance.interceptors.response.use(
  (response) => {
    if (window.loadingContext) window.loadingContext.hideLoading();
    return response;
  },
  (error) => {
    if (window.loadingContext) window.loadingContext.hideLoading();
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});


export const httpGet = async (endpoint, config = {}) => {
  try {
    const res = await axiosInstance.get(endpoint, config);
    return res;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};

export const httpPost = async (endpoint, data, config = {}) => {
  try {
    const res = await axiosInstance.post(endpoint, data, config);
    return res;
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
};

export const httpPut = async (endpoint, data, config = {}) => {
  try {
    const res = await axiosInstance.put(endpoint, data, config);
    return res;
  } catch (error) {
    console.error("PUT Error:", error);
    throw error;
  }
};

export const httpDelete = async (endpoint, config = {}) => {
  try {
    const res = await axiosInstance.delete(endpoint, config);
    return res;
  } catch (error) {
    console.error("DELETE Error:", error);
    throw error;
  }
};

export const httpUpload = async (endpoint, formData, config = {}) => {
  try {
    const res = await axiosInstance.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...config.headers,
      },
      ...config,
    });
    return res;
  } catch (error) {
    console.error("Upload Error:", error);
    throw error;
  }
};

// Example auth header support
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;