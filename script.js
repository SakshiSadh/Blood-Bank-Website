let image2 =
  "https://images.unsplash.com/photo-1487811566627-ecd6321dfd2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvb3IlMjBjaGlsZHJlbnMlMjBpbiUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
let image1 =
  "https://images.unsplash.com/photo-1518174148433-c63260e11cb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvb3IlMjBjaGlsZHJlbnMlMjBpbiUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
let image0 =
  "https://images.unsplash.com/photo-1482848961846-c15622fd5db2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvb3IlMjBjaGlsZHJlbnMlMjBpbiUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const images = [image0, image1, image2];
let i=0;
let dots = document.getElementsByClassName("dot");
// for (i = 0; i < images.length; i++) {
//   setTimeout(() => {
//     document.getElementById("slideshow").src = images[i];
//     // dots[i].className += " active";
//   }, 8000);
// }

// document.getElementById("slideshow").src=images[1];
function slideshow(p){

  if(p===1){
    if((i+1)>2){i=0;}
    else{i++;}
   
  }
  else if(p===-1){
    if((i-1)<0){i=2;}
    else{i--;}
    
  }
  
    document.getElementById("slideshow").src = images[i];
  

}
// for(let j=0;j<images.length;i++){
//     setTimeout(slideshow(), 5000);
// }
// document.getElementById("next").addEventListener("click", ()=>{
//   console.log("button clicked");
//   while(true){
//     setInterval(slideshow(), 4000);
// // }

// }
  
// )

