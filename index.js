function opentab(tabname){
    var tablinks = document.querySelectorAll(".tab-links");
    var tabcontents = document.querySelectorAll(".tab-contents");
    for( let tablink of tablinks){
       tablink.classList.remove("active-link") ;
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab") ;
     }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
