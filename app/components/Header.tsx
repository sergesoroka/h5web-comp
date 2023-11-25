// @ts-nocheck
import MenubarDemo from "./Menubar/Menubar";

function Header({ fileList, radioSelection, setRadioSelection }) {
  return (
    <div className="h-14 pt-2">
      <MenubarDemo
        fileList={fileList}
        setRadioSelection={setRadioSelection}
        radioSelection={radioSelection}
      />
    </div>
  );
}

export default Header;
