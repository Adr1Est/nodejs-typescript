// const httpClientPlugin = {
//   get: async (url) => {
//     const response = await fetch(url);
//     return await response.json();
//   },

//   post: async (url, body) => { },
//   put: async (url, body) => { },
//   delete: async (url) => { },

// };

// AXIOS
import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  },

  post: async (url: string, body: any) => { },
  put: async (url: string, body: any) => { },
  delete: async (url: string, body: any) => { },

};