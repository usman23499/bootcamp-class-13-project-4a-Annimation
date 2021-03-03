import './App.css';
// import bg1 from "./images/bg_sky.jpg"
import bg2 from "./images/bg_earth.jpg"
import chess1 from "./images/r_pawn_upright_small.png"
import chess2 from "./images/w_rook_small.png"
import plam1 from "./images/palm1_small.png"
import droppudayda from "./images/r_pawn_small.png"
import hourse from "./images/r_knight_small.png"
import plam2 from "./images/palm2_small.png"
import chess3 from "./images/w_rook_upright_small.png"
import plam3 from "./images/palm3_small.png"
import girlimg from "./images/sprite_running-alice-queen_small.png"


import useWebAnimations from "@wellyshen/use-web-animations";
import { useEffect } from 'react';

function App() {
var speed=0;
var queen= 1000

useEffect(() => {
  // Update the document title using the browser API
  

  
    const interval = setInterval(() => {
      if(speed>2){
        speed=speed-2;
        myref2.getAnimation().updatePlaybackRate(speed)
        myref.getAnimation().updatePlaybackRate(speed)
        myref3.getAnimation().updatePlaybackRate(speed)
        console.log("Here we set Time for speed decrecess after 2sec if we incress the speed")
      }
    }, 2000);
    return () => clearInterval(interval);
    
});

  const myref = useWebAnimations({
    keyframes: {
      transform: "translateX(-250%)", 
     
      
    },
    timing: {
      // delay: 5000, // Start with a 500ms delay
      duration: 10000, // Run for 1000ms
      iterations:Infinity, // Repeat once
      // direction:"", // Run the animation forwards and then backwards
      // easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });
  
  const myref2 = useWebAnimations({
    keyframes: {
      transform: 'translateY(0)' ,
      transform: 'translateY(-100%)'   
     
      
    },
    timing: {
      // delay: 5000, // Start with a 500ms delay
        
      iterations: Infinity, // Repeat once
      // direction:"", // Run the animation forwards and then backwards
      easing: "steps(7, start)", // mane start is lea kia hai q ke mere pass first ye he aarah hai
      direction: "reverse",
      duration: queen,
      playbackRate: 1,
      
    },
    
  });


 const myref3 = useWebAnimations({
    keyframes: {
      transform: "translateX(-250%)", 
     
      
    },
    timing: {
      // delay: 5000, // Start with a 500ms delay
      duration: 8000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      // direction:"", // Run the animation forwards and then backwards
      // easing: "ease-in-out", // Use a fancy timing function
      
    },
    
  });

let  Clickfun=()=>{
 

speed=speed+2;
if(speed>4){
  myref2.getAnimation().updatePlaybackRate(speed)
  myref.getAnimation().updatePlaybackRate(speed)
  myref3.getAnimation().updatePlaybackRate(speed)
  

}
else{
  myref2.getAnimation().updatePlaybackRate(speed)
}

setInterval=()=>{

}
// paly bck initial 1 ye yebatate hai ke ab uper wale duration main kiten dafa chalna hai  
  }

  return (
    <div  onClick={()=>Clickfun()}>
      
      
      

     
        <div className="bgimg1"  />
      

        <br />
        
      
     
      <img className="bgimg2" alt="" src={bg2} />
    
    <div style={{width:"100%",overflow:"hidden",position: "absolute",marginTop:"-390px"}}>
<div ref={myref.ref} className="Back_ground">

<img height="300px"  alt="" style={{marginLeft:"1350px"}} src={chess1} />

<img height="200px" alt=""  style={{marginLeft:"40px",marginTop:"40px ",position:"absolute" }} src={plam1} />

<img height="120px" alt="" style={{marginLeft:"400px",marginTop:"160px ",position:"absolute" }} src={chess2} />

<img height="120px" alt="" style={{marginLeft:"1000px",marginTop:"160px ",position:"absolute" }}  src={droppudayda} />

<img height="120px" alt="" style={{marginLeft:"1800px",marginTop:"160px ",position:"absolute" }} src={hourse} />

<img height="120px"  alt="" style={{marginLeft:"1950px",marginTop:"160px ",position:"absolute" }} src={plam2} />


     </div>


<div ref={myref3.ref} className="Back_down">


<img height="300px" alt=""  style={{marginLeft:"1190px",marginTop:"30px"}} src={plam3} />

<img height="200px" alt="" style={{marginLeft:"700px",marginTop:"120px ",position:"absolute" }} src={chess3} />



</div>

</div>





<div className="Queen">
<img height="700%" ref={myref2.ref}  alt="" style={{marginTop:"400px",overflow:"hidden"}} src={girlimg} />
</div>


</div>

  );
}

export default App;
