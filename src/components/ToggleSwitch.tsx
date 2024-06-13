import React from "react";

interface ToggleSwitchProps {
    isOn: boolean;
    handleToggle: () => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
    isOn,
    handleToggle,
}) => {
    return (
        <div
            className={`flex items-center cursor-pointer bg-primary w-[32px] h-[20px] p-1 transition-colors duration-300 border border-dark`}
            onClick={handleToggle}
        >
            <div
                className={`bg-dark w-3 h-3 shadow-md transform transition-transform duration-300 ${
                    isOn ? "translate-x-2.5" : ""
                }`}
            ></div>
        </div>
    );
};
