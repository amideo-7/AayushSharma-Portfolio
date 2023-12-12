Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
    images: ["images/DA.jpg", "images/ML.jpg", "images/DS.jpg"],
});

// gsap.to(".pleftelem", {
//   scrollTrigger: {
//     trigger: "#projectimages",
//     pin: true,
//     start: "top top",
//     end: "bottom bottom",
//     endTrigger: ".last",
//     scrub: 1
//   },
//   y: "-300%",
//   ease: Power1,
// });

// gsap.to(".relem", {
//   scrollTrigger: {
//     trigger: "#projectimages",
//     pin: true,
//     start: "top top",
//     end: "bottom bottom",
//     endTrigger: ".lastt",
//     scrub: 1
//   },
//   y: "-300%",
//   ease: Power1,
// });

// let sections = document.querySelectorAll(".pleftelem");
// Shery.imageEffect(".images", {
//   style: 4,
//   config: { onMouse: { value: 1 } },
//   slideStyle: (setScroll) => {
//     sections.forEach(function (section, index) {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         scrub: 1,
//         onUpdate: function (prog) {
//           setScroll(prog.progress + index);
//         },
//       });
//     });
//   },
// });

