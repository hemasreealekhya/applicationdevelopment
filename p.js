const p =window.location.pathname;
const navLinks = document.SelectorAll('nav a').forEach(link => {
 if(link.href.includes(`${p}`)){
    link.class.add('active');
 }  
});