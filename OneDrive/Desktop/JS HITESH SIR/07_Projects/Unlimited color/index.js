const generateColor=function(){
    const hex="0123456789abcdef";
    let color="#";
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
console.log(generateColor());
const btn1=document.querySelector('#start');
const btn2=document.querySelector('#stop');

let intervalid;
const startChangingColor=function(){

   intervalid=setInterval(anand,1000);
   function anand(){
    document.body.style.backgroundColor=generateColor();
  }
  
}
const stopChangingColor=function(){
   document.body.style.backgroundColor='#212121';
   clearInterval(intervalid);
}
btn1.addEventListener('click',startChangingColor);
btn2.addEventListener('click',stopChangingColor)


