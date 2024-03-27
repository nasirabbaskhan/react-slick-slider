"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface student {
  name: string;
  url: string;
  description: string;
}
const data: student[] = [
  {
    name: "Annabelle mae",
    url: "/pro5.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya",
  },
  {
    name: "Ann Claire",
    url: "/pro3.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya",
  },
  {
    name: "Elizabeth Anne",
    url: "/pro5.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya ",
  },
  {
    name: "Emma Grace",
    url: "/pro3.png",
    description:
      "bcjggjhdhfdh  fu jagfya agdyaddsa dysa  nagyugad agduya nas sduyegdyu asjgfuya nas sduyegdyu asjgfuya",
  },
];

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 200,
  };
  return (
    <>
      <div className="text-3xl my-4 text-center font-bold text-white">
        Reviews
      </div>
      <div className=" space-3 w-3/4  mx-auto  shadow-lg ">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-col space-x-2 rounded-lg bg-white  "
              >
                <div className="bg-blue-500 py-6 rounded">
                  <Image
                    src={item.url}
                    alt="image"
                    width={150}
                    height={150}
                    className="bg-blue-100 rounded-full mx-auto "
                  />
                </div>

                <div className="text-2xl text-center my-3">{item.name}</div>
                <div className="text-md px-3 bg-w">{item.description}</div>
                <div>
                  <button className="bg-blue-400 mx-auto block my-3 text-white  rounded py-1 px-4">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
