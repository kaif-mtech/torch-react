import React from "react";
import LockIcon from "../assets/icons/LockIcon";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

interface FooterProps {
    votes: string;
    timeLeft: string;
}

const Footer: React.FC<FooterProps> = ({ votes, timeLeft }) => {
    const avatarArr: string[] = [avatar1, avatar2, avatar3];
    return (
        <div className="flex items-center justify-between rounded">
            <div className="flex items-center space-x-2">
                <div className="relative">
                    {avatarArr.map((avatar, index) => (
                        <img
                            src={avatar}
                            key={index}
                            alt={`avatar-${index}`}
                            className={`w-8 h-8 rounded-full border-0 ${
                                index !== 0 && "absolute top-0"
                            } ${
                                index === 1
                                    ? "left-4"
                                    : index === 2
                                    ? "left-8"
                                    : ""
                            }`}
                        />
                    ))}
                </div>
                <span className="pl-8 flex flex-col items-center">
                    <span className="font-bold text-sm">{votes}</span>
                    <span className="text-xs opacity-50">Votes</span>
                </span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
                <span className="font-medium">
                    Ends in <span className="font-bold">{timeLeft}</span>
                </span>
                <div className="w-8 h-8 bg-dark opacity-50 flex items-center justify-center rounded-full">
                    <LockIcon />
                </div>
            </div>
        </div>
    );
};

export default Footer;
