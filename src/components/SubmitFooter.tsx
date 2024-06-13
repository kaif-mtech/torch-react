import React, { useState } from "react";
import { ToggleSwitch } from "./ToggleSwitch";

const SubmitFooter: React.FC = () => {
    const [isToggled, setIsToggled] = useState(true);
    return (
        <div className="flex justify-between">
            <div className="flex items-center w-[150px]">
                <ToggleSwitch
                    isOn={isToggled}
                    handleToggle={() => {
                        setIsToggled((prev) => !prev);
                    }}
                />
                <span className="text-xs ml-2 font-medium">
                    Answer anounymously
                </span>
            </div>
            <button className="bg-black font-bold text-primary py-1 px-3 text-sm w-[120px] h-[40px] uppercase whitespace-nowrap">
                Submit
            </button>
        </div>
    );
};

export default SubmitFooter;
