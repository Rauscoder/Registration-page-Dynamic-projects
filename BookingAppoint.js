let forms=document.getElementById('my-forms');
forms.addEventListener('submit',userInput);
let names=document.getElementById('name');
let email=document.getElementById('mail');
let phone=document.getElementById('phone');
let date=document.querySelector('.datee');
let time=document.querySelector('.timee');
let ulist=document.getElementById("list-user");
function userInput(e){
   e.preventDefault();
   if(names===''||email===''||phone==''){
       alert("please enter all fields values");
  }
  else{
    const userDetails={
          Name:names.value,
          Email:email.value,
          Phone:phone.value,
          dates:date.value,
          Time:time.value,
          }
  
 axios.post("https://crudcrud.com/api/7ab884dcdf3944a19bd0b4acf2ec026c/AppointmentData",userDetails)
 .then((response)=>{
    showUserInput(userDetails); 
 }).catch((err)=>{
   document.body.innerHTML="<h1>please make correct apis</h1>";
 });
}
  
}
window.addEventListener("DOMContentLoaded",()=>{
  axios.get("https://crudcrud.com/api/7ab884dcdf3944a19bd0b4acf2ec026c/AppointmentData")
  .then((response)=>{
    
    for(let i=0;i<response.data.length;i++){
      showUserInput(response.data[i]);
    }
  }).catch((err)=>{
    alert(err);
  });
});
function showUserInput(obj){
    let li=document.createElement('li');
li.appendChild(document.createTextNode(`${obj.Name}-${obj.Email}-${obj.Phone}`));
    let btn=document.createElement('button');
    
    btn.id='btn1';
    btn.className="btn btn-danger btn-sm float-right delete ml-2";
    btn.appendChild(document.createTextNode('Delete'));
    li.appendChild(btn);
    
    let btn2=document.createElement('button');
    btn2.id='btn2';
    btn2.className="btn btn-sm float-right btn-danger mr-2";
    btn2.appendChild(document.createTextNode('Edit'));
    li.appendChild(btn2);
    ulist.appendChild(li);
}