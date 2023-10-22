let tl=gsap.timeline();

tl.from("#navBar img, #navmid h3, #navRight h4, #navRight  button",{
    y:-200,
    dealy:1,
    duration:3,
    stagger:0.2,
})

tl.from("#h1Div h1",{
    y:200,
    stagger:0.4,
    opacity:0,
})
tl.from(".sideImg",{
    opacity:0,
    scale:0,
    stagger:0.3,
})
tl.from("h5",{
    opacity:0,
    scale:0,
    stagger:0.3,
})
tl.to("h5",{
    y:20,
    yoyo:true,
    repeat:-1,
    duration:0.4,
})
