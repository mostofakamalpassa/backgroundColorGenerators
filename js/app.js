window.onload = ()=>{

  main();




}

function main(){


    const copyColor = document.getElementById('color-code');

    document.getElementById('change-btn').addEventListener('click', function(e){
  
        const body = document.getElementById('body');
        const bgColor = generatorColor();
        body.style.backgroundColor = bgColor;

        copyColor.value = bgColor;
        //console.log(bgColor);

    })


    
}


/*******======================= generator Colors ===============****/

function generatorColor(){

   // rgb color  red  green blue height number 255, 255, 255, lowes number 0,0,0,

   const red  = Math.floor(Math.random()*255);
   const green =  Math.floor(Math.random()*255);
   const blue = Math.floor(Math.random()*255);
   
//    return `rgb(${red}, ${green}, ${blue})`;
   return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

}