const homePage = document.querySelector(".homepage");
const carousel = document.querySelector(".carousel");
const contactPage = document.querySelector(".contact");


const url = "https://anyadecourcy.no/wp-json/wp/v2/pages";

async function getData (){
    try{
        const response = await fetch(url);
        const details= await response.json();
        console.log(details);
        //createHTML(details);
    
        
        
        const homePageDetails = details[2];
      
        
        console.log(homePageDetails);
        home (homePageDetails);
       
        
        //contact(facts[1]);
        //console.log(contact);
        
       
    }
    catch (error){
        console.log(error);
    }
}
getData();



function home(homepage){
    homePage.innerHTML = 
        `
            <div>${homepage.content.rendered}</div> 
        
        `

   
}

















