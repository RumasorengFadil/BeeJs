import IndexController from "../controller/IndexController";


const displayPage = function(path){
    switch(path){
        case "/" : 
            IndexController.renderIndexView();
            break;
    }
}

const handlerNavigation = function(){
    const path = window.location.pathname;
 
    displayPage(path);
}

document.addEventListener("click", function(e){
    e.preventDefault();
    const aElement = e.target.closest("a");
    const path = aElement?.getAttribute("href");

    if(aElement?.tagName !== "A" || !path) return;


    window.history.pushState(null, "", path);

    displayPage(path);
})


document.addEventListener("DOMContentLoaded", handlerNavigation);
window.addEventListener("popstate", handlerNavigation);