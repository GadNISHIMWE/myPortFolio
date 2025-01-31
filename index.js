var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right ="0";
    sidemenu.style.right ="-200px";
}
function closemenu(){
    sidemenu.style.right ="-200px";
}
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
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on page load
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
