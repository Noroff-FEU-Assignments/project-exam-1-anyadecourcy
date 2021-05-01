const blogContainer = document.querySelector(".blogPosts");
const url = "https://anyadecourcy.no/wp-json/wp/v2/posts";
let docTitle=document.title;

async function fetchPost (){
    try{
        const response = await fetch(url);
        const details = await response.json();

        //console.log(details);
        createHTML(details)

    }
    catch (error){
        console.log(error);
    }

}
fetchPost();

function createHTML(details){
    console.log(details);


    details.forEach(function(detail){
        console.log(detail);

        blogContainer.innerHTML += 
            `
            
            <a href = "blog-info.html?id=${detail.id}">
                 <h1>${detail.title.rendered}</h1>
            </a>
            <date>${detail.date}</date>
          
            <p>${detail.excerpt.rendered}</p>

            
            `
    


    })
   
}






