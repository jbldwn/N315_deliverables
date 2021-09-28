function updateActive(navID){
    $('a').removeClass('activeLink');
    $(`#${navID}`).addClass('activeLink');
}
function route(){
    let hashTag = window.location.hash;
    let navID = hashTag.replace("#/","");

    $.get(MODEL.getNavVar(navID));
    updateActive(navID);
}
//listens for URL change
function initListeners(){
    $(window).on("hashchange",route);
    route();
}
//update active nav link

$(document).ready(function(){
    //use when live to check listeners
    initListeners();
    updateActive('home');
})