let tl = gsap.timeline()
tl.from("#navBar img, #navBar h1, #navBar button",{
    y:-100,
    duration:0.8,
    opacity:0,
    stagger:0.5
})
tl.from("#body h2",{
    y:100,
    opacity:0,
    duration:0.8,
    stagger:0.4
})
tl.from("#eight,#seven",{
    x:-100,
    duration:0.8,
    opacity:0,
    stagger:0.4
})
tl.from("#three,#five",{
    x:100,
    duration:0.8,
    opacity:0,
    stagger:0.4
})
tl.from("#scrollDown",{
    opacity:0,
})
tl.to("#scrollDown",{
    y:10,
    repeat:-1,
    duration:1,
    yoyo:true
})
document.getElementById("scrollDown").style.cursor = "pointer";
document.getElementById("bookNow").style.cursor = "pointer";
document.getElementById("nav-button").style.cursor = "pointer";
