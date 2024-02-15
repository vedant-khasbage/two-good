const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function videoanimation(){
    var videocont=document.querySelector("#video-container")
var playbtn=document.querySelector("#play")
videocont.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1
    })
})
videocont.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0
    })
})
videocont.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-100,
        top:dets.y-100,
    })
})
}
videoanimation();

function loadanimation(){
    gsap.from("#page1 h1",{
        y:100,
        delay:0.5,
        duration:0.9,
        opacity:0,
        stagger:0.3
    
    })
}

loadanimation();

document.addEventListener("mousemove",function(dets){
gsap.to("#cursor",{
    left:dets.x,
    top:dets.y,
})
})

document.querySelector("#page3").addEventListener("mouseenter", function() {
    gsap.to("#cursor", {
        transform: `translate(-50%, -50%) scale(1)`
    });
});
