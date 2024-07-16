// /** @format */

// import { useCallback } from "react";
// import { Toast } from "app/shared";
// import { axiosCall } from "services";
// // import { useTypedSelector } from "store";

// export const useAxios = () => {
//   //   const {
//   //     token: { access_token },
//   //   } = useTypedSelector(({ authReducer }) => authReducer);

//   const memoizeAxios = ({ method, data, url, isJsonType = true }) =>
//     axiosCall({
//       method,
//       data,
//       url,
//       isJsonType,
//       headers: {
//         authorization: "access_token",
//       },
//     })
//       .then((res) => {
//         return res;
//       })
//       .catch((error) => {
//         if (error) {
//           const { status, data } = error;
//           if (status === 404)
//             return Toast({ message: error.data.message, type: "error" });
//           if (status === 403) {
//             const status = data.status;
//             if (status === "access_denied") {
//               Toast({
//                 message:
//                   "Admin has changed the permissions. Forcefully Refreshing to load latest set permissions for you.",
//                 type: "info",
//               });
//               //   setTimeout(() => {
//               //     location.reload();
//               //   }, 3000);
//             }
//           }
//           if (status === 422)
//             return Toast({ message: error.data.message, type: "error" });
//           if (status === 401)
//             return Toast({ message: error.data.message, type: "error" });
//         }
//         const apiError = {
//           data: error?.data?.data,
//           status: error?.status,
//           message: error?.data.message,
//           show_popup: error?.data.show_popup ?? true,
//         };
//         return apiError;
//       });

//   const callAxios = useCallback(
//     memoizeAxios,
//     //eslint-disable-next-line
//     [access_token]
//   );

//   return {
//     callAxios,
//   };
// };
