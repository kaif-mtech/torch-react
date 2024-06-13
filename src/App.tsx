import React from "react";
import Header from "./components/Header";
import PollCard from "./components/PollCard";
import image1 from "./assets/1.png";
import image2 from "./assets/2.png";
import image3 from "./assets/3.png";
import image4 from "./assets/4.png";
import image5 from "./assets/5.png";
import image6 from "./assets/6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/pagination"; // Pagination module styles

export interface OptionType {
    title?: string;
    src?: string;
    month?: string;
    date?: number;
}

export interface PollType {
    questiontext: string;
    descriptionText: string;
    comments: number;
    polltype: string;
    options: OptionType[];
    votes: number;
    votesText: string;
    endsIn: string;
    multiple?: boolean;
}

const App: React.FC = () => {
    const pollData: PollType[] = [
        {
            questiontext: "Who will be the next UK Prime Minister?",
            descriptionText: "Settle it once and for all...",
            comments: 30,
            polltype: "media_poll",
            options: [
                {
                    title: "Rishi Sunak",
                    src: image1,
                },
                {
                    title: "Boris Johnson",
                    src: image2,
                },
                {
                    title: "Rishi Sunak",
                    src: image3,
                },
                {
                    title: "Boris Johnson",
                    src: image4,
                },
                {
                    title: "Rishi Sunak",
                    src: image5,
                },
                {
                    title: "Boris Johnson",
                    src: image6,
                },
            ],
            votes: 1500,
            votesText: "1.5k",
            endsIn: "21:36:00",
        },
        {
            questiontext: "New Questionssss ",
            descriptionText: "Descriptionsss",
            comments: 2,
            polltype: "media_poll",
            options: [
                {
                    title: "Image 1111",
                    src: image1,
                },
                {
                    title: "Image 22222",
                    src: image2,
                },
            ],
            votes: 1500,
            votesText: "12.5k",
            endsIn: "11:26:40",
        },
        {
            questiontext: "Who will be the next UK Prime Minister?",
            descriptionText: "Settle it once and for all...",
            comments: 30,
            polltype: "text_poll",
            options: [
                {
                    title: "Rishi Sunak",
                },
                {
                    title: "Boris Johnson",
                },
                {
                    title: "Jerry Hunt",
                },
                {
                    title: "Liz Truss",
                },
            ],
            multiple: true,
            votes: 1500,
            votesText: "1.5k",
            endsIn: "21:36:00",
        },
        {
            questiontext: "When will Brexit be finalized?",
            descriptionText: "",
            comments: 20,
            polltype: "date_poll",
            options: [
                {
                    month: "MAR",
                    date: 12,
                },
                {
                    month: "MAR",
                    date: 26,
                },
                {
                    month: "APR",
                    date: 3,
                },
                {
                    month: "APR",
                    date: 19,
                },
            ],
            votes: 1500,
            votesText: "1.5k",
            endsIn: "21:36:00",
        },
    ];
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="w-clamp-w h-clamp-h bg-gradient-to-b from-[#302f2f] via-[#db8944]  to-[#fefb7f] p-4">
                <Header />
                <Swiper
                    direction={"vertical"}
                    className="mySwiper1"
                    style={{ height: "calc(100% - 117px)" }}
                >
                    {pollData.map((poll, index) => (
                        <SwiperSlide key={index}>
                            <PollCard currentPoll={poll} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default App;
