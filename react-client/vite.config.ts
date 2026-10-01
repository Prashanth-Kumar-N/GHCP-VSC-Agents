import { defineConfig  } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const userToken = {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjI3NDAyNCIsInJvbGUiOlsiUEFDS0FHSU5HIEVOR0lORUVSIiwiQURNSU5JU1RSQVRPUiJdLCJuYmYiOjE1NTAyMjMxNDQsImV4cCI6MTU1MDIyNDk0NCwiaWF0IjoxNTUwMjIzMTQ0fQ.bkgdpbVlpl6POgekRXH6JICqPLS3bFuSSUrtjS0bglw",
    "token_type": "bearer",
    "expires_in": 1799,
    "user_name": "257604",
    "name": "Austin",
    "roles": [
        "PFEP SPECIALIST",
        "PFEP MANAGEMENT SEGMENT",
        "PFEP MANAGEMENT FACILITY",
        "TACTICAL BUYER",
        "PACKAGING ENGINEER",
        "ADMINISTRATOR",
        "BUSINESS ADMINISTRATOR",
        "MATErials ADMINISTRATOR"
    ],
    "facility_id": "STH001",
    "facility_desc": "OSHKOSH CORPORATION DEFENSE SOUTH PLANT ",
    "org_id": "DEF",
    "org_desc": "Defense",
    "work_center_id_list": "[\"S7\",\"S113\"]",
    "work_center_desc": null,
    "alert_preference_list": "",
    ".issued": "Fri, 15 Feb 2019 09:32:23 GMT",
    ".expires": "Fri, 15 Feb 2019 10:02:23 GMT"
};
export default defineConfig(({}) => {

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:5112",
          changeOrigin: true,
        },
      },
    },
    define: {
      "user.env": JSON.stringify(userToken)
    }
  }
})
