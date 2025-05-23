import React from "react";
import Contact from "./Contact";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";

//assets
import room from "../assets/room.jpg";
import background2 from "../assets/bg-white-authentic.png";
import logo from "../assets/logo-authentic.png";
import vergus from "../assets/vergus.jpg";
import vBanner from "../assets/v-banner-authentic.png";
import modelThree from "../assets/model-three.png";
import stripe from "../assets/stripe-red.png";
import groupPhoto from "../assets/group-photo.png";
import phMap from "../assets/ph-map.png";
import logoWhite from "../assets/logo-white-authentic.png";
import overlay from "../assets/overlay-authentic.png";
import skatePark from "../assets/skate-park.png";
import headerBg from "../assets/header-bg.png";

const About = () => {
  return (
    <div className="h-screen">
      <Parallax pages={7}>
        {/*BACKGROUND */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={3}
          style={{
            backgroundImage: `url(${background2})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={0.2}
          factor={3}
          style={{
            backgroundImage: `url(${overlay})`,
            // backgroundSize: "cover",
            backgroundRepeat: "repeat",
            backgroundPosition: "right",
            opacity: "8%",
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${groupPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />

        <ParallaxLayer
          offset={4}
          speed={0.2}
          factor={2}
          style={{
            backgroundImage: `url(${background2})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />

        <ParallaxLayer
          offset={4}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${skatePark})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />

        {/* CONTENT*/}
        <ParallaxLayer offset={0} speed={1}>
          <div className="flex items-center justify-center h-screen">
            <img src={logo} alt="logo" className="h-auto" />
          </div>
        </ParallaxLayer>

        {/*Content */}
        <ParallaxLayer offset={1} speed={1}>
          <div className="flex items-center justify-center h-screen">
            <div className="flex justify-center items-center w-[40%]">
              <div className="w-[90%] pr-[130px]">
                <h1 className="mt-10 text-4xl font-bold text-left text-red-600">
                  Authentic Holding Company,
                </h1>
                <p className="max-w-2xl mx-auto mt-4 text-left">
                  up-and-coming family-owned conglomerate poised to redefine
                  urban-culture in the dynamic landscape of the Philippine
                  economy. With a commitment to integrity and innovation, we’re
                  on the lookout for brands that embody the essence of urban
                  culture, bringing fresh perspectives and vibrant experiences
                  to Filipino consumers.
                </p>
                <div className="flex items-center justify-start ml-10">
                  <img src={stripe} alt="stripe red" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="mr-2">
                <img src={vBanner} alt="banner" />
              </div>
              <div className="flex flex-col items-center">
                <img src={room} alt="room" className="w-[525px] h-[355px]" />
                <img
                  src={vergus}
                  alt="vergus"
                  className="mt-4 w-[525px] h-[355px]"
                />
              </div>
            </div>
            <ParallaxLayer
              offset={1}
              speed={0.5}
              style={{ pointerEvents: "none" }} // optional: prevents it from blocking clicks
            >
              <div className="absolute -translate-y-[700px] left-[45%]">
                <img
                  src={modelThree}
                  alt="model"
                  className="w-[400px] h-[500px]"
                />
              </div>
            </ParallaxLayer>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1}>
          <div className="flex items-center justify-center h-screen gap-10">
            <div>
              <div className="flex items-center">
                <div className="flex items-center justify-start -translate-y-[55px]">
                  <img src={stripe} alt="stripe red" />
                </div>
                <h1 className="mb-[100px] text-4xl font-bold text-left text-white">
                  WHO IS AUTHENTIC?
                </h1>
              </div>
              <div className="flex text-white gap-9">
                <p className="max-w-2xl mx-auto mt-4 w-[400px] text-justify">
                  <b>AUTHENTIC HOLDING</b>, a third-generation, family-owned
                  holding company, stands as the exclusive distributor for major
                  international brands in the Philippines, pioneering
                  top-quality products for Filipino consumers. Despite our
                  youth, we’ve swiftly become leaders in the Retail Sector,
                  driven by innovation, customer satisfaction and a fervent
                  commitment to excellence. Our board of directors passionately
                  drives growth and sets new standards, poised to expand across
                  Asia-Pacific, guided by a relentless pursuit of quality and
                  market expansion.
                </p>
                <p className="max-w-2xl mx-auto mt-4 text-center w-[400px] text-justify">
                  At <b>“AUTHENTIC,”</b> youthfulness fuels our ambition and
                  drives our innovative spirit. With a fresh perspective and
                  dynamic energy, we’re rewriting the rules of the retail
                  industry, pioneering new pathways and setting bold standards
                  for success. Our team is passionate about pushing boundaries,
                  embracing challenges and building a legacy of excellence and
                  commitment in everything we do.
                </p>
              </div>
            </div>

            <div className="">
              <img src={phMap} alt="map ph" className="w-auto h-auto" />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1}>
          <div className="flex flex-col items-center py-10 text-white">
            <div className="flex items-center w-full max-w-[65%]">
              <div className="flex items-center justify-start -translate-y-[25px]">
                <img src={stripe} alt="stripe red" />
              </div>
              <h1 className="mb-10 text-4xl font-bold text-center">
                COMPANY STRUCTURE
              </h1>
            </div>
            <div className="mb-10">
              <div className="flex justify-center">
                <img src={logoWhite} alt="logo white" />
              </div>
              <h1>AUTHENTIC HOLDINGS CORPORATION “AHC”</h1>
            </div>
            {/* Horizontal line */}
            <div className="w-full max-w-[700px] h-[2px] bg-red-500" />

            {/* Vertical lines */}
            <div className="flex justify-between w-full max-w-[700px] mt-[-1px] h-[30px]">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-[2px] bg-red-500" />
              ))}
            </div>

            {/* Labels */}
            <div className="flex justify-between w-full max-w-[800px] mt-4 text-xs text-center font-light">
              {[
                "AUTHENTIC CAPS DISTRIBUTION INC",
                "AUTHENTIC CAPS RETAIL INC",
                "ARRDI",
                "OTHERS",
              ].map((label, i) => (
                <div key={i} className="w-[100px] px-1">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={1}>
          <div className="flex flex-col items-center justify-center h-screen text-white">
            <div className="w-[65%]">
              <div className="flex">
                <div className="flex items-center justify-start -translate-y-[45px]">
                  <img src={stripe} alt="stripe red" />
                </div>
                <h1 className="text-4xl font-bold text-center">
                  MISSION & VISION
                </h1>
              </div>
              <div className="">
                <p className="max-w-[1000px] mx-auto text-[22px] text-center">
                  To inspire and enrich culture, through authenticity and
                  elevating service, fostering a transformative experience for
                  all.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* CONTACT */}
        <ParallaxLayer offset={6} speed={1}>
          <div className="flex items-center justify-center h-screen">
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default About;
