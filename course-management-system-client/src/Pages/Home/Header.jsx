// import React, { use } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { use } from "react";
import { Link } from "react-router";

const Header = ({ sliders }) => {
  const slider = use(sliders);

  return (
    <div className="w-11/12 mx-auto my-12">
      <div className="">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          dynamicHeight={true}
        >
          {slider?.map((item) => {
            return (
              <div
                key={item?._id}
                className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 bg-base-100 rounded-md overflow-hidden outline-none"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-primary space-y-2 text-left px-8 py-2 flex-1">
                    <h1 className="text-xs font-bold md:text-2xl lg:text-3xl">
                      {item?.title}
                    </h1>
                    <p className="hidden md:block">{item?.description}</p>
                    <p className="md:hidden text-xs">
                      {item?.description?.slice(0, 50)}...
                    </p>
                    <Link
                      to={"/"}
                      className="text-xs bg-secondary text-white px-1 py-2 rounded-md cursor-pointer"
                    >
                      {item.ctaText}
                    </Link>
                  </div>

                  <div className="flex-1">
                    <img className="w-full rounded-lg" src={item?.image} />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
