const clock=document.querySelector('#clock')

setInterval(function(){
  let date=new Date();
   clock.addEventListener('click',function(e){
        //clock.innerTextContent=(console.log(date.toLocaleTimeString()));
        clock.innerHTML=date.toLocaleString();
   })

},2000)