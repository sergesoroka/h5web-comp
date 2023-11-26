// @ts-nocheck
import SelectDemo from "./SelectFile";

function Header({ fileList, radioSelection, setRadioSelection }) {
  return (
    <div className="h-14 pt-2">
      <SelectDemo
        fileList={fileList}
        setRadioSelection={setRadioSelection}
        radioSelection={radioSelection}
      />
    </div>
  );
}

export default Header;
