// @ts-nocheck
"use client";
import "@h5web/app/dist/styles.css";

import { App, H5GroveProvider, MockProvider } from "@h5web/app";

// WORKS
{
  /* <H5GroveProvider
        url="https://bosquet.silx.org/h5grove/meta/?file=water_224.h5&path=%2F"
        filepath="water_224.h5"
        axiosParams={{ file: "water_224.h5" }}
      >
        <App />
      </H5GroveProvider> */
}

// https://api.ramanchada.ideaconsult.net/h5grove/paths/?path=%2F&resolve_links=only_valid&file=bcd0c827-9c88-426f-87f9-b8a8dd5feb1f.nxs

function H5web({ urls }) {
  console.log(urls[0]);

  return (
    <div>
      <H5GroveProvider
        url="https://api.ramanchada.ideaconsult.net/h5grove/"
        filepath="ef6ea2de-55da-4fa6-9abc-e9b3c0077e38.nxs"
        axiosConfig={{
          mode: "no-cors",
          withCredentials: false,
          params: { file: "ef6ea2de-55da-4fa6-9abc-e9b3c0077e38.nxs" },
        }}
      >
        <App />
      </H5GroveProvider>
    </div>
  );
}

export default H5web;
