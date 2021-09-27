
function showVariable(newName){
    console.log("newName app.js " + newName);
};

function showSecondVariable(secondName){
    console.log("secondName app.js " + secondName);
};


function setBindings() {
    $("nav a").click(function(e){
        let btnID = e.currentTarget.id;
        MODEL.getMyVariable(btnID);

        //change acitve class
        e.preventDefault();
        $('a').removeClass('activeLink');
        $(this).addClass('activeLink');
        
    });
   
}

$(document).ready(function(){
    console.log("ready");
    setBindings();
    

});