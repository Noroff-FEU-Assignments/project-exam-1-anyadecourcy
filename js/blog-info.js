blogInfoContainer = document.querySelector(".blog-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");





const url = "https://anyadecourcy.no/wp-json/wp/v2/posts/" + id;
console.log(url);


async function getBlogDetails(){
    try{
        const response = await fetch(url);
        const details = await response.json();
        //console.log(details);
        createHTML(details);
      
        

    }
    catch(error){
        console.log(error);
    }

}
getBlogDetails();

function createHTML(blog){
    console.log(blog);
    document.title= blog.title.rendered;
    blogInfoContainer.innerHTML = 
    `
    <h1>${blog.title.rendered}</h1></a>
            <div class = "blogInfo">${blog.content.rendered}</div>
    
    `
}
