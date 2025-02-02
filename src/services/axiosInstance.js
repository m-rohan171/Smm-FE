// import axios from "axios";
// import { Toast } from "app/shared";

// export const _instance = axios.create({
//   baseURL: import.meta.env.VITE_SERVER_URL,
// });

// _instance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// _instance.interceptors.response.use(
//   (config) => {
//     if (!config.headers["X-Skip-Interceptor"]) {
//       // Perform the additional API call
//     }
//     // await ()=>deploymentCall.then(response => console.log(response))
//     delete config.request;
//     return config;
//   },
//   (error) => {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     const anotherSession = JSON.parse(localStorage.getItem("anotherSession"));
//     const { message = "", isAxiosError = false, response } = error;
//     const list = [];
//     if (message && isAxiosError && !response) {
//       return Toast({ message: message, type: "error" });
//     } else if (response.status === 400) {
//       return Toast({ message: response.data.message, type: "error" });
//     } else if (response.status === 422) {
//       const {
//         data: { message, errors = {} },
//       } = response;
//       for (const key in errors) {
//         list.push(errors[key]);
//       }
//       if (list.length) {
//         if (list[0][0] !== "Your invitation is deleted or expired") {
//           return Toast({ message: list.join(), type: "error" });
//         }
//       } else return Toast({ message, type: "error" });
//     } else if (response.status === 401) {
//       if (anotherSession) {
//         localStorage.clear();
//         return Toast({
//           message: "Due to another active session, you have been logged out from this device.",
//           type: "error",
//         });
//       }
//       return Toast({ message: response.data.message, type: "error" });
//     } else if (response.status === 500) {
//       return Toast({ message: response.data.message, type: "error" });
//     }
//     return Promise.reject(error);
//   }
// );
