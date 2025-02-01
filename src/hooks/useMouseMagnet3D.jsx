import { useEffect } from "react";
import { gsap } from "gsap";

function useMouseMagnet3D(
  ref,
  container,
  deps = [],
  Turner,
  duration,
  ease,
  strengthLinear,
  strengthRotation
) {
  useEffect(() => {
    const expandRec = ref.current;
    const handleMouseMove = (event) => {
      if (!Turner) {
        const rect = expandRec.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);

        gsap.to(expandRec, {
          x: offsetX * strengthLinear,
          y: offsetY * strengthLinear,
          rotationY: offsetX * strengthRotation,
          rotationX: -offsetY * strengthRotation,
          transformPerspective: 800,
          duration: duration,
          ease: ease,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(expandRec, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.3,
        ease: "power4.out",
      });
    };

    container.current.addEventListener("mousemove", handleMouseMove);
    container.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.current.removeEventListener("mousemove", handleMouseMove);
      container.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, deps);
}

export { useMouseMagnet3D };
