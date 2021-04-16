var arrow = document.getElementsByClassName("arrow");
var faq_items = document.getElementsByClassName("item-faq");

function add_Event(){
    var arrow = document.getElementsByClassName("arrow");
    var title = document.getElementsByClassName('title');
    for (let i = 0; i<arrow.length; i++){
        arrow[i].addEventListener("click", function(){
            if (faq_items[i].style.display == "none"){
                faq_items[i].style.display ="block";
                title[i].style.fontWeight = "600";
                arrow[i].style.transform = "rotate(180deg)";
            }
            else{
                faq_items[i].style.display ="none";
                title[i].style.fontWeight = "400";
                arrow[i].style.transform = "rotate(0deg)";
            }
        });
    }
};


window.onload = add_Event;