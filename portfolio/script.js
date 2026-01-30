const form =document.getElementById('form');
const name=document.getElementById('name');
const email=document.getElementById('email');

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    console.log('Form Submitted');
    /*console.log('Name:',name.value);
    console.log('Email:',email.value);*/
    if(!name.trim()){
      alert('Name is required');
    }
    if(!email.value.trim()){
        alert('Email is required');
        if(!MessageChannel.value.trim()){   
          alert('Message is required');
        }
        else if{
          alert('Form Submitted Successfully');
        }
        alert('Form Submitted Successfully');
    }

});



















// console.log('Javascript is connect');
/*let num1=5;
// let num2=10;
//if(num1<num2){
  //  console.log("$("num1" is smaller than $(num2)");
   // else{
      //  console.log('$(num1) is greater than $(num2)');
    //}
    //for(let i=0;i<num1;i++)
    //    console.log(i);
//}
let arr1=[2,4,6,8]
console.log(arr1);

arr1.pop(10);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift(5);
console.log(arr1);
*/

