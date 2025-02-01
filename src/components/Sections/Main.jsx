import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";
import Header from "../Sub_Components/Header";
import {useMouseMagnet3D} from "../../hooks/useMouseMagnet3D";
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const container = useRef(null);
  const expandRecRef = useRef(null);
  const textRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [cors, setCors] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const handleExpandClick = () => {
    setisClicked(!isClicked);
  };
  useGSAP(() => {
    const tl = gsap.timeline();
    if (cors) {
      if (!isFullScreen) {
        tl.to([".ha1", ".ha2"], { opacity: 0, y: -50, duration: 0.5, ease: "power4.inOut" })
          .to(textRef.current, { opacity: 0, duration: 0.3, ease: "power4.inOut" })
          .to(expandRecRef.current, {
            width: "80dvw",
            height: "80dvh",
            x: 0,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            transformPerspective: 0,
            duration: 1,
            ease: "power4.inOut",
            onStart: () => {
              expandRecRef.current.style.pointerEvents = "none";
            },
            onComplete: () => {
              expandRecRef.current.style.pointerEvents = "auto";
              setIsFullScreen(true);
            }
          });
      } else {
        tl.to(expandRecRef.current, {
          width: "16rem",
          height: "16rem",
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          borderRadius: "0.5rem",
          duration: 1,
          ease: "power4.inOut",
          onStart: () => {
            expandRecRef.current.style.pointerEvents = "none";
          },
          onComplete: () => {
            expandRecRef.current.style.pointerEvents = "auto";
          }
        })
          .to([".ha1", ".ha2"], { opacity: 1, y: 0, duration: 0.5, ease: "power4.inOut" })
          .to(textRef.current, { opacity: 1, duration: 0.3, ease: "power4.inOut" });
        setIsFullScreen(false);
      }
    }
  }, [isClicked]);
  useGSAP(() => {
    gsap.timeline()
      .to(".ha1", { x: -60, duration: 1, ease: "power4.inOut" })
      .to(".ha2", { x: 240, duration: 1, ease: "power4.inOut" })
      .to(".expand_rec", {
        scale: 1,
        duration: 1,
        ease: "power4.out",
        onComplete: () => {
          setCors(true);
          gsap.to(textRef.current, {
            text: "Welcome to the Lions' Den",
            duration: 3,
            ease: "power2.out",
            yoyo: true,
          });
        },
      });
  }, { scope: container });
  // Custom Hook he to make code look clean
  useMouseMagnet3D(expandRecRef,container,[isFullScreen],isFullScreen, 0.3, "power4.out", 0.05, 0.03);
  return (
    <div className="min-h-screen min-w-screen overflow-hidden relative" ref={container}>
      <Header />
      <section className="flex justify-center items-center gap-4 h-screen">
        <h1 className="ha1 hero-heading special-font text-4xl font-zentry z-10" style={{ userSelect: "none" }}>
          G<b>I</b>R{" "}
        </h1>
        <div
          ref={expandRecRef}
          className="expand_rec"
          style={{
            position: "absolute",
            transformStyle: "preserve-3d",
            willChange: "transform",
            cursor: "pointer",
            width: "16rem",
            height: "16rem",
            top: "50%",
            userSelect: "none",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0)",
            borderRadius: "0.5rem",
            overflow: "hidden",
            zIndex: isFullScreen ? 11 : 1,
          }}
          onClick={handleExpandClick}
        >
          <img
            src="https://images.unsplash.com/photo-1618641662184-bafefb91a542?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwYmxhY2slMjBsaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="enter_into_gir_world"
            draggable="false"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="ha2 hero-heading special-font font-zentry z-10" style={{ userSelect: "none" }}>
          HO<b>U</b>SE
        </h1>
      </section>
      <section className="absolute bottom-20 w-screen flex align-middle items-center justify-center">
        <p ref={textRef} className="special-font z-10 font-robert-medium text-2xl center" style={{ whiteSpace: "nowrap" }}></p>
      </section>
    </div>
  );
};

export default Main;
