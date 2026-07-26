const form=document.getElementById("form");

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

let father=document.getElementById("father").value;

let age=document.getElementById("age").value;

let email=document.getElementById("email").value;

let course=document.getElementById("course").value;

document.querySelectorAll("small").forEach(item=>item.innerHTML="");

let valid=true;

if(name==""){

nameError.innerHTML="Required";

valid=false;

}

if(father==""){

fatherError.innerHTML="Required";

valid=false;

}

if(age==""){

ageError.innerHTML="Required";

valid=false;

}

if(email==""){

emailError.innerHTML="Required";

valid=false;

}

if(course=="Select Course"){

courseError.innerHTML="Select Course";

valid=false;

}

if(valid){

dName.innerHTML=name;

dFather.innerHTML=father;

dAge.innerHTML=age;

dEmail.innerHTML=email;

dCourse.innerHTML=course;

date.innerHTML=new Date().toDateString();

}

});
