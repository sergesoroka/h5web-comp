// @ts-nocheck
"use client";
import "@h5web/app/dist/styles.css";

import { App, H5GroveProvider } from "@h5web/app";

function H5web({ radioSelection }) {
  return (
    <div>
      <H5GroveProvider
        url="https://api.ramanchada.ideaconsult.net/h5grove/"
        filepath={`${radioSelection}.nxs`}
        axiosConfig={{
          mode: "no-cors",
          withCredentials: false,
          params: { file: `${radioSelection}.nxs` },
        }}
      >
        <App />
      </H5GroveProvider>
    </div>
  );
}

export default H5web;
