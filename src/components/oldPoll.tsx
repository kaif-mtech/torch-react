import React from "react";
import SaveIcon from "../assets/icons/SaveIcon";
import ShareIcon from "../assets/icons/ShareIcon";
import CommentIcon from "../assets/icons/CommentIcon";
import Footer from "./Footer";
import { OptionType, PollType } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Swiper core styles
import "swiper/css/pagination"; // Pagination module styles

interface PollCardsType {
    currentPoll: PollType;
}

const PollCard: React.FC<PollCardsType> = ({ currentPoll }) => {
    // const [currentPollIndex, setCurrentPollIndex] = useState(0);
    // const startY = useRef(0);

    // const handleTouchStart = (e: React.TouchEvent) => {
    //     startY.current = e.touches[0].clientY;
    // };

    // const handleTouchEnd = (e: React.TouchEvent) => {
    //     const endY = e.changedTouches[0].clientY;
    //     const diffY = startY.current - endY;

    //     if (diffY > 20) {
    //         setCurrentPollIndex(
    //             (prevIndex) => (prevIndex + 1) % pollData.length
    //         );
    //     }
    // };

    // const handleMouseDown = (e: React.MouseEvent) => {
    //     startY.current = e.clientY;
    // };

    // const handleMouseUp = (e: React.MouseEvent) => {
    //     const endY = e.clientY;
    //     const diffY = startY.current - endY;

    //     if (diffY > 20) {
    //         setCurrentPollIndex(
    //             (prevIndex) => (prevIndex + 1) % pollData.length
    //         );
    //     }
    // };

    // const handleScroll = (e: Event) => {
    //     console.log("Scroll event detected");
    //     const container = e.target as HTMLElement;
    //     console.log("🚀 ~ handleScroll ~ container:", container);
    //     const scrollThreshold = 50;
    //     if (container.scrollTop > scrollThreshold) {
    //         setCurrentPollIndex(
    //             (prevIndex) => (prevIndex + 1) % pollData.length
    //         );
    //         container.scrollTop = 0;
    //     }
    // };

    // useEffect(() => {
    //     const container = document.getElementById("poll-container");
    //     if (container) {
    //         container.addEventListener("scroll", handleScroll);
    //     }
    //     return () => {
    //         if (container) {
    //             container.removeEventListener("scroll", handleScroll);
    //         }
    //     };
    // }, []);

    // const currentPoll: PollType = pollData[currentPollIndex];

    return (
        <>
            <div
                className="text-white select-none overflow-y-auto transition-opacity duration-500 ease-in-out opacity-100"
                id="poll-container"
                // onTouchStart={handleTouchStart}
                // onTouchEnd={handleTouchEnd}
                // onMouseDown={handleMouseDown}
                // onMouseUp={handleMouseUp}
            >
                <div className="flex justify-between my-6">
                    <div className="mb-4 mr-2">
                        <h2 className="text-3xl font-bold">
                            {currentPoll.questiontext}
                        </h2>
                        <p className="text-sm opacity-70">
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
                {/* <div className="flex justify-between items-center mb-4">
                    {currentPoll.options.map(
                        (option: OptionType, index: number) => (
                            <div className="relative" key={index}>
                                <img
                                    className="w-40 h-64 rounded object-cover"
                                    src={option.src}
                                    alt={option.title}
                                />
                                <button className="absolute left-1/2 transform -translate-x-1/2 bottom-5 bg-black text-white py-1 px-3 text-sm rounded-full max-w-[calc(100%-10px)] whitespace-nowrap">
                                    {option.title}
                                </button>
                            </div>
                        )
                    )}
                </div> */}
                <div className="mb-4">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {currentPoll.options.map(
                            (option: OptionType, index: number) => (
                                <>
                                    <SwiperSlide key={index}>
                                        <div className="relative">
                                            <img
                                                className="w-40 h-64 rounded object-cover"
                                                src={option.src}
                                                alt={option.title}
                                            />
                                            <button className="absolute left-1/2 transform -translate-x-1/2 bottom-5 bg-black text-white py-1 px-3 text-sm rounded-full max-w-[calc(100%-10px)] whitespace-nowrap">
                                                {option.title}
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        )}
                    </Swiper>
                </div>
            </div>
            <Footer
                votes={currentPoll.votesText}
                timeLeft={currentPoll.endsIn}
            />
        </>
    );
};

export default PollCard;
