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

// bcd0c827-9c88-426f-87f9-b8a8dd5feb1f
// http://api.ramanchada.ideaconsult.net/dataset/bcd0c827-9c88-426f-87f9-b8a8dd5feb1f&path=%2F

function H5web({ urls }) {
  console.log(urls[0]);

  return (
    <div>
      <H5GroveProvider
        url="https://bosquet.silx.org/h5grove/meta/?file=water_224.h5&path=%2F"
        filepath="/meta/?file=bcd0c827-9c88-426f-87f9-b8a8dd5feb1f"
        axiosParams={{ file: "bcd0c827-9c88-426f-87f9-b8a8dd5feb1f" }}
      >
        <App />
      </H5GroveProvider>
    </div>
  );
}

export default H5web;
