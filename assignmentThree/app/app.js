function route(){
    let hashTag = window.location.hash;
    let navID = hashTag.replace("#/","");

    // console.log(navID);
    
    $.get(MODEL.getNavVar(navID));
    updateActive(navID);
}
//listens for URL change
function initListeners(){
    $(window).on("hashchange",route);
    route();
}
//update active nav link
function updateActive(navID){
    //change acitve class
    // e.preventDefault(navID);
    $('a').removeClass('activeLink');
    $(`#${navID}`).addClass('activeLink');

    // console.log("update");

}

$(document).ready(function(){
    //use when live to check listeners
    initListeners();
    updateActive('home');
    // console.log("load");
    //use to auto load what you're styling
    // navToPage("home");
})