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
   if(names===''||email===''||phone===''){
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
  
 axios.post("https://crudcrud.com/api/aad9b9d1b30a43a9b545c766adc2e453/AppointmentData",userDetails)
 .then((response)=>{
    showUserInput(response.data); 
 }).catch((err)=>{
   document.body.innerHTML="<h1>please make correct apis</h1>";
 });
}
}

document.addEventListener("DOMContentLoaded",()=>{
  axios.get("https://crudcrud.com/api/aad9b9d1b30a43a9b545c766adc2e453/AppointmentData")
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
    let btn1=document.createElement('button');
    
    btn1.id='btn1';
    btn1.className="btn btn-danger btn-sm float-right delete ml-2";
    btn1.appendChild(document.createTextNode('Delete'));
    li.appendChild(btn1);
    
    let btn2=document.createElement('button');
    btn2.id='btn2';
    btn2.className="btn btn-sm float-right btn-danger mr-2";
    btn2.appendChild(document.createTextNode('Edit'));
    li.appendChild(btn2);
    ulist.appendChild(li);
    let ids=obj._id;
    btn1.addEventListener("click",(e)=>{
      ulist.removeChild(e.target.parentElement);
      axios.delete("https://crudcrud.com/api/aad9b9d1b30a43a9b545c766adc2e453/AppointmentData/"+ids)
      .then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log("error");
      });
    });

}