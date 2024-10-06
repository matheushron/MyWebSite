//lembrete em JavaScript - caso eu queira ter vários botoões em uma função, não deixar eles dentro de uma unica função de click 

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 2, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.5 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

// ---------------------------------------------------------------------------------
var texto = document.getElementById("print")

function onClick(){
   document.getElementById("print").innerHTML = "mudou" 
}

