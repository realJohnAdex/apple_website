import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animateProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 2,
    ease: "power2.out",
  });

  timeline.to(
    firstTarget,
    {
      ...animateProps,
      ease: "power2.out",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animateProps,
      ease: "power2.out",
    },
    "<"
  );
};
