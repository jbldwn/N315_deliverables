function addModalListener(){
    $(".inactive").click(function(e){
        gsap.to($(".login"), { scale: 0, duration: 0});
        // $(".modal").css("display", "none");
    });
}
function updateActive(navID){
    navContainer = document.querySelector('navPages');
    navConChild = navContainer.querySelectorAll('a');
    $('navPages a').removeClass('txt-colorOrg').addClass('txt-colorBlk');
    $(`#${navID}`).addClass('txt-colorOrg').removeClass('txt-colorBlk');
}
function updatePageHeader(navID){
    document.getElementById('navIdentifierID').innerHTML = `${navID}`;
}

function route(){
    let hashTag = window.location.hash;
    let navID = hashTag.replace("#/","");

    $.get(MODEL.getNavVar(navID));
    updateActive(navID);
    updatePageHeader(navID);
}
//listens for URL change
function initListeners(){
    // $("#submit").click(function(e){
    //     e.preventDefault();

    //     let text = $("#login-text").val();
    //     gsap.to($(".login"), { 
    //         scale: 0, 
    //         duration: 0, 
    //         onComplete: showAlert, 
    //         onCompleteParams: [text],
    //     });

    // });

    // $("#loginModal").click(function(e){
    //     gsap.to($(".login"), { 
    //         ease: "elastic.out", 
    //         scale: 1, 
    //         duration: 2, 
    //         });
    //     addModalListener();
    // })
    $(window).on("hashchange",route);
    route();
}
//update active nav link

$(document).ready(function(){
    //use when live to check listeners
    // gsap.set($(".login"), { scale: 0 });
    initListeners();
    updateActive('home');
    updatePageHeader('home');
})