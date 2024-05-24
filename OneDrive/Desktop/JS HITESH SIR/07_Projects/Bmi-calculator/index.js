// in this the major part we have to understand is that how to fetch input  from the form and perform
// some mathmatical operation   



// the difference between fetching the input variable in sumbit button apply
// but not in the beginning because as the page load if js code run then the input variable will be 0
const form=document.querySelector('form');

form.addEventListener('submit',function (e){
   e.preventDefault();

   
   const height=parseInt(document.querySelector('#height').value);
   const weight=parseInt(document.querySelector('#weight').value);
   const result=document.querySelector('#results');
   const button=document.querySelector('btn');
   

   if(height===''|| height<0 || isNaN(height)){
    result.innerHTML=`please give a validheight`
   }

   else if(weight===''|| weight<0 || isNaN(weight)){
    result.innerHTML=`"please give a validweight"`;
   }

   else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML=`Result--->${bmi}`
    if(bmi<18.6){
      alert('Khana kha le')
     }
   }
   
})
