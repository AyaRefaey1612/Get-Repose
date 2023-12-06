let input=document.querySelector("input");
let button=document.querySelector(".buttonRepose");
let div=document.querySelector(".noData");

button.onclick=function(){
    getRepos();
}
function getRepos(){
    // check if the input empty
    if(input.value == ""){
       div.innerHTML="<span>Value Cant Be Empty</span>";
    }else{
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then((response)=>response.json())
        .then((repositores)=>{
            console.log(repositores); 
            
            // emty the div
            div.innerHTML="";
            // loop on repositores
           
            repositores.forEach(repos => {
                let reposDiv=document.createElement("div");
                let text=document.createTextNode(repos.name);
                
                reposDiv.appendChild(text);
                let url=document.createElement("a");
                let urlText=document.createTextNode("visit");
                 url.appendChild(urlText);
                url.href=`https://github.com/${input.value}/${repos.name}`;
                url.setAttribute("target" , "blank");
               
                reposDiv.appendChild(url);
            //    the number of stars
              let span=document.createElement("span");
              let spanText=document.createTextNode(`stars is ${repos.stargazers_count}`);
              
                span.appendChild(spanText);
                reposDiv.appendChild(span);  
                reposDiv.className="repos-box";

                div.appendChild(reposDiv); 
                
            });

        })
       
     

        
    }
}
