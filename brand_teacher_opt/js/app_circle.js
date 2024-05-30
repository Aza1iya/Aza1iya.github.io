gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

gsap.to("#circle1", {
  scrollTrigger: {
    trigger: "#first_circle_trigger",
    start: "top center",
    end: "220% center",
    scrub: 3,
    markers: true
  }, 
  duration: 5,
  ease: "power1.inOut",
  keyframes: {
    "97%": {
      opacity: 1,
      motionPath:{
        path: "#path1",
        align: "#path1",
        autoRotate: true,
        alignOrigin: [0.5, 0]
      }
    },
    "100%": {
      opacity: 0,
      motionPath:{
        path: [{x: -20, y: 200}]
      }
    }
  }
});

gsap.to("#circle2", {
  scrollTrigger: {
    trigger: "#second_circle_trigger",
    start: "bottom center",
    end: "220% center",
    scrub: 3,
    markers: true
  }, 
  duration: 5,
  ease: "power1.inOut",
  keyframes: {
    "0%": {
      opacity: 0,
      motionPath: {
        path: [{x: -20, y: -200}]
      }
    },
    "3%": {
      opacity: 1,
      motionPath: {
        path: [{x: 0, y: 0}]
      }
    },
    "97%": {
      opacity: 1,
      motionPath: {
        path: "#path2",
        align: "#path2",
        autoRotate: true,
        alignOrigin: [0.5, 1]
      }
    },
    "100%": {
      opacity: 0,
      motionPath: {
        path: [{x: 736, y: 200}]
      }
    }
  }
});

