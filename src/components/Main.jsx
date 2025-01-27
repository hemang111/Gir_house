  import React, { useRef, useEffect, useState } from "react";
  import { gsap } from "gsap";
  import { useGSAP } from "@gsap/react";
  import { ScrollTrigger } from "gsap/all";
  import { TextPlugin } from "gsap/TextPlugin";
  import Header from "./Header";
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const Main = () => {
    const container = useRef(null);
    const expandRecRef = useRef(null);
    const textRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [onls,setOnls] = useState(false);
    const [cors,setCors] = useState(false);
    const handleExpandClick = () => {
      console.log(cors);
      if(cors){
      if (!isFullScreen) {
        const tl = gsap.timeline();
        tl.to([".ha1", ".ha2"], {
          opacity: 0,
          y: -50,
          duration: 0.5,
          ease: "power4.inOut",
        }).to(textRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power4.inOut",
        })
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
          });

        setIsFullScreen(true);
      } else {
        const tl = gsap.timeline();
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
        })
          .to([".ha1", ".ha2"], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power4.inOut",
          })
          .to(textRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power4.inOut",
          });
        setIsFullScreen(false);
      }
    }
    };

    useGSAP(
      () => {
        const tl = gsap.timeline();
        tl.to(".ha1", {
          x: -60,
          duration: 1,
          ease: "power4.inOut",
        });
        tl.to(".ha2", {
          x: 240,
          duration: 1,
          ease: "power4.inOut",
        });
        tl.to(".expand_rec", {
          scale: 1,
          duration: 1,
          ease: "power4.out",
          onComplete: () => {
            setCors(true);
            setOnls(true);
            gsap.to(textRef.current, {
              text: "Welcome to the Lions' Den",
              duration: 3,
              ease: "power2.out",
              yoyo: true,
            });
          },
        });
      },
      { scope: container }
    );

    useEffect(() => {
      const expandRec = expandRecRef.current;

      const handleMouseMove = (event) => {
        if (onls && !isFullScreen) {
          const rect = expandRec.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const offsetX = event.clientX - centerX;
          const offsetY = event.clientY - centerY;

          const strength = 0.05;
          const rotationStrength = 0.03;
          gsap.to(expandRec, {
            x: offsetX * strength,
            y: offsetY * strength,
            rotationY: offsetX * rotationStrength,
            rotationX: -offsetY * rotationStrength,
            transformPerspective: 800,
            duration: 0.3,
            ease: "power4.out",
          });
        }
      };

      const handleMouseLeave = () => {
        if (!isFullScreen) {
          gsap.to(expandRec, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 0.3,
            ease: "power4.out",
          });
        }
      };

      container.current.addEventListener("mousemove", handleMouseMove);
      container.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.current.removeEventListener("mousemove", handleMouseMove);
        container.current.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, [isFullScreen]);

    return (
      <div className="min-h-screen min-w-screen overflow-hidden relative" ref={container}>
      <Header/>
        <section className="flex justify-center items-center gap-4 h-screen">
          <h1 className="ha1 hero-heading special-font text-4xl font-zentry z-10" style={{ userSelect: "none"}}>
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
              // cursor: "pointer",
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
          <h1 className="ha2 hero-heading special-font font-zentry z-10" style={{ userSelect: "none"}}>
            HO<b>U</b>SE
          </h1>
        </section>
        <section className="absolute bottom-20 w-screen flex align-middle items-center justify-center">
          <p
            ref={textRef}
            className="special-font z-10 font-robert-medium text-2xl center"
            style={{ whiteSpace: "nowrap" }}
          ></p>
        </section>
      </div>
    );
  };

  export default Main;
