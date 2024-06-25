import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1 });
    gsap.to("#cta", { opacity: 1, delay: 2, y: -50 });
  }, []);
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth > 768 ? heroVideo : smallHeroVideo,
  );
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setvideoSrc(heroVideo);
    } else {
      setvideoSrc(smallHeroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            key={videoSrc}
            playsInline={true}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a className="btn" href="#highlights">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
