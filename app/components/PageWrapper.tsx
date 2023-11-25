"use client";
import React from "react";
import Header from "./Header";
import H5web from "./h5web";

// @ts-ignore
function PageWrapper({ fileList }) {
  const [radioSelection, setRadioSelection] = React.useState(fileList[1]);
  return (
    <>
      <Header
        fileList={fileList}
        setRadioSelection={setRadioSelection}
        radioSelection={radioSelection}
      />
      <H5web radioSelection={radioSelection} />
    </>
  );
}

export default PageWrapper;
