const buttons = document.querySelectorAll('.button')
const body=document.querySelector("body")


buttons.forEach(function(button){
//    console.log(button)
   button.addEventListener('click',function(e){
        //  console.log(e);
        //  console.log(e.target)
         if(e.target.id==="grey")
         body.style.backgroundColor='#212121';

         if(e.target.id==="white")
         body.style.backgroundColor='black';

         
         if(e.target.id==="blue")
         body.style.backgroundColor='blue';

         if(e.target.id==="yellow")
         body.style.backgroundColor='yellow';


   })
});