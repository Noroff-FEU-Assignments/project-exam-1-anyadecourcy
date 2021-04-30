const contactPage = document.querySelector(".contact");
const url = "http://localhost/project-exam1/wordpress-5.7/wordpress/wp-json/wp/v2/pages";



async function getData (){
    try{
        const response = await fetch(url);
        const details= await response.json();
        console.log(details);
    
        const contactPageDetails = details[1];
        contact (contactPageDetails);
         
    }
    catch (error){
        console.log(error);
    }
}
getData();



function contact(contactpage){
    contactPage.innerHTML = 
        `
            <div>${contactpage.content.rendered}</div>
        
        `
       
}




const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 5) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }



    console.log("hello");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}













