"use client";

import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

// @ts-ignore
const MenubarDemo = ({ fileList, radioSelection, setRadioSelection }) => {
  return (
    <Menubar.Root className="flex bg-white p-[3px]">
      <Menubar.Menu>
        <Menubar.Trigger className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-violet11 text-[16px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
          Choose a File <ChevronRightIcon />
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            <Menubar.RadioGroup
              className="grid grid-cols-3 p-5 leading-6"
              value={radioSelection}
              onValueChange={setRadioSelection}
            >
              {/* @ts-ignore */}
              {fileList.map((item) => (
                <Menubar.RadioItem
                  className="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-slate-600 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-state-[checked]:text-green-600"
                  key={item}
                  value={item}
                >
                  <Menubar.ItemIndicator className="absolute left-0 w-5 inline-flex items-center justify-center">
                    <DotFilledIcon />
                  </Menubar.ItemIndicator>
                  {item}
                </Menubar.RadioItem>
              ))}
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default MenubarDemo;
