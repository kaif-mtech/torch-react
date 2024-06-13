import React, { useState } from "react";
import SaveIcon from "../assets/icons/SaveIcon";
import ShareIcon from "../assets/icons/ShareIcon";
import CommentIcon from "../assets/icons/CommentIcon";
import TickIcon from "../assets/icons/TickIcon";
import Footer from "./Footer";
import { OptionType, PollType } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import SubmitFooter from "./SubmitFooter";
import { POLL_TYPE_ENUMS } from "../utils/constants";

interface PollCardsType {
    currentPoll: PollType;
}

const PollCard: React.FC<PollCardsType> = ({ currentPoll }) => {
    const [selectedType, setSelectedType] = useState<number | number[]>(
        currentPoll.multiple ? [-1] : -1
    );

    const handleCardClick = (option: OptionType, index: number) => {
        console.log("🚀 ~ handleCardClick ~ option:", option);
        if (currentPoll.multiple) {
            setSelectedType((prev) => {
                if (Array.isArray(prev)) {
                    if (prev.includes(index)) {
                        const newArr = prev.filter((i) => i !== index);
                        if (newArr.length > 0) {
                            return newArr;
                        } else {
                            return [-1];
                        }
                    } else {
                        const newArr = prev.filter((i) => i !== -1);
                        return [...newArr, index];
                    }
                }
                return [index];
            });
        } else {
            setSelectedType((prev) => (prev === index ? -1 : index));
        }
    };

    const renderPollOptions = (type: string) => {
        switch (type) {
            case POLL_TYPE_ENUMS.MEDIA_POLL:
                return (
                    <Swiper
                        slidesPerView={2.1}
                        spaceBetween={10}
                        className="mySwiper2"
                    >
                        {currentPoll.options.map(
                            (option: OptionType, index: number) => (
                                <SwiperSlide
                                    key={index}
                                    onClick={() =>
                                        handleCardClick(option, index)
                                    }
                                >
                                    <div
                                        className={`relative ${
                                            selectedType !== -1 &&
                                            selectedType !== index
                                                ? "opacity-35"
                                                : ""
                                        }`}
                                    >
                                        <img
                                            className="w-40 h-64 md:w-60 md:h-96 rounded object-cover mb-[11px]"
                                            src={option.src}
                                            alt={option.title}
                                        />
                                        <button className="absolute left-1/2 md:left-1/3 transform -translate-x-1/2 bottom-5 bg-black text-white py-1 px-3 text-sm md:text-base rounded-full max-w-[calc(100% - 10px)] whitespace-nowrap">
                                            {option.title}
                                        </button>
                                    </div>
                                    {selectedType !== -1 &&
                                    selectedType === index ? (
                                        <div className="absolute bottom-0 left-1/2 md:left-1/3 transform -translate-x-1/2">
                                            <TickIcon />
                                        </div>
                                    ) : null}
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                );
            case POLL_TYPE_ENUMS.TEXT_POLL:
                return (
                    <>
                        <div className="flex flex-col">
                            {currentPoll.options.map((option, index) => (
                                <div className="relative">
                                    <div
                                        className={`flex border w-[312px] md:w-[450px] h-[56px] md:h-[78px] rounded-lg border-dark bg-white text-dark justify-center items-center font-bold text-lg md:text-2xl border-b-4 ${
                                            Array.isArray(selectedType) &&
                                            !selectedType.includes(-1) &&
                                            selectedType.includes(index)
                                                ? "!bg-primary"
                                                : ""
                                        }`}
                                        key={index}
                                        onClick={() =>
                                            handleCardClick(option, index)
                                        }
                                    >
                                        {option.title}
                                    </div>
                                    {Array.isArray(selectedType) &&
                                    !selectedType.includes(-1) &&
                                    selectedType.includes(index) ? (
                                        <div className="absolute right-7 top-1/2 transform -translate-y-1/2">
                                            <TickIcon />
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </>
                );
            case POLL_TYPE_ENUMS.DATE_POLL:
                return (
                    <Swiper
                        slidesPerView={2.8}
                        spaceBetween={10}
                        className="mySwiper2"
                    >
                        {currentPoll.options.map(
                            (option: OptionType, index: number) => (
                                <SwiperSlide
                                    key={index}
                                    onClick={() =>
                                        handleCardClick(option, index)
                                    }
                                >
                                    <div
                                        className={`relative ${
                                            selectedType !== -1 &&
                                            selectedType !== index
                                                ? "opacity-35"
                                                : ""
                                        }`}
                                    >
                                        <div className="w-28 h-40 md:w-40 md:h-60 bg-white text-dark flex flex-col justify-between border-dark border">
                                            <div className="border border-dark w-[100px] h-[148px] md:w-[148px] md:h-[228px] absolute left-[6px] top-[6px] opacity-40"></div>
                                            <div className="flex justify-center items-center uppercase bg-primary h-10 md:h-15 font-bold border-b border-dark text-base md:text-xl">
                                                {option.month}
                                            </div>
                                            <div className="flex justify-center items-center h-full text-6xl md:text-8xl font-medium">
                                                {option.date}
                                            </div>
                                        </div>
                                    </div>
                                    {selectedType !== -1 &&
                                    selectedType === index ? (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                                            <TickIcon />
                                        </div>
                                    ) : null}
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex justify-between flex-col h-full">
            <div className="text-white select-none overflow-y-hidden transition-opacity duration-500 ease-in-out opacity-100">
                <div className="flex justify-between my-6">
                    <div className="mb-4 mr-2">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            {currentPoll.questiontext}
                        </h2>
                        <p className="text-sm md:text-base opacity-70">
                            {currentPoll.descriptionText}
                        </p>
                    </div>
                    <div className="flex justify-between items-center flex-col ">
                        <div className="flex flex-col items-center mb-2">
                            <SaveIcon />
                            <span className="text-xs">Save</span>
                        </div>
                        <div className="flex flex-col items-center mb-2">
                            <ShareIcon />
                            <span className="text-xs">Share</span>
                        </div>
                        <div className="flex flex-col items-center mb-2">
                            <CommentIcon />
                            <span className="text-xs">
                                {currentPoll.comments}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mb-8 flex justify-center">
                    {renderPollOptions(currentPoll.polltype)}
                </div>
            </div>
            <div className="h-10">
                {(Array.isArray(selectedType) && selectedType.includes(-1)) ||
                selectedType === -1 ? (
                    <Footer
                        votes={currentPoll.votesText}
                        timeLeft={currentPoll.endsIn}
                    />
                ) : (
                    <SubmitFooter />
                )}
            </div>
        </div>
    );
};

export default PollCard;
