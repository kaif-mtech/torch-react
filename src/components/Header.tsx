// src/components/Header.tsx
import React from "react";
import TorchIcon from "../assets/icons/TorchIcon";
import profileImage from "../assets/profile.png";

const Header: React.FC = () => {
    return (
        <>
            <div className="h-[15px]">
                <TorchIcon />
            </div>
            <div className="flex items-center justify-center w-full text-white rounded-t-lg -mt-4 flex-col">
                <img
                    className="h-[50px] w-[50px] rounded-full object-cover"
                    src={profileImage}
                    alt="User"
                />
                <div className="text-sm font-bold">
                    Tony Lawlor (@Desert123)
                </div>
                <div className="text-xs">invited you to answer a poll</div>
            </div>
        </>
    );
};

export default Header;
