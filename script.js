let state = false;
let state2 = true;
function menuShow(){

  let nav =  document.querySelector(".nav")
  let window = document.querySelector("#blur");
  if(!state){
    nav.style.left = "0%";
    state = true;
    window.style.backgroundColor = "rgba(0,0,0,0.5)";
    document.body.style.overflow = "hidden";
    console.log(state);
    
  }
  else{
    nav.style.left= "-100%";
    state = false;
    state2 = false
    window.style.backgroundColor = "rgba(0,0,0,0)";
    document.body.style.overflow = "auto";
  }
   console.log(state) ;

let showSubMenu= ()=>{
    let nav = document.querySelector(".mega-menu");

    if(!state){
        if(state2){
 nav.style.transform = "translateY(1)"
        }
       
    }
    else{
        nav.style.transform = "translateY(0)"
    }
}
}