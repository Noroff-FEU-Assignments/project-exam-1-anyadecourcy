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











