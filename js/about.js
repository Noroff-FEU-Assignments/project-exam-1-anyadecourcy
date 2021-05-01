const aboutPage = document.querySelector(".about");
const url = "https://anyadecourcy.no/wp-json/wp/v2/pages";

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
    aboutPage.innerHTML = 
        `
            <div>${contactpage.content.rendered}</div>
        
        `
       
}











