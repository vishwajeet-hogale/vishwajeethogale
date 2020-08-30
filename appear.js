// $(document).ready(function () {

//     if (screen.width < 1024) {
//         $(".uff").hide();
//         $(".uff1").show();
//     }
//     else {

//         $(".uff").show();
//         $(".uff1").hide();
//     }

// });
const li_nav = document.querySelectorAll(".uff");
const li = document.querySelector(".uff1");
console.log(screen.availWidth)
if(screen.availWidth < 1024){
    console.log(1);
    // li_nav.map(element => console.log(element.classList));
    // li.style.display = "block";
}