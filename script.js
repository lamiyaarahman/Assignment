const sideMenu = document.querySelector('#sideMenu');

function openMenu() {
    sideMenu.style.transform = 'translateX(0)'; // Show the menu
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(-100%)'; // Hide the menu
}


document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
      
      const icon = item.querySelector('.toggle-icon');
      icon.textContent = icon.textContent === '+' ? '-' : '+';
  });
});



// var btn_diva = document.getElementById("btn_diva");
// var btn_divb = document.getElementById("btn_divb");
// var btn_divc = document.getElementById("btn_divc");

// var diva = document.getElementById("diva");
// var divb = document.getElementById("divb");
// var divc = document.getElementById("divc");

// btn_diva.addEventListener('click', () =>{
//   diva.style.display = "block";
//   divb.style.display = "none";
//   divc.style.display = "none";
// });
// btn_divb.addEventListener('click', () =>{
//   divb.style.display = "block";
//   diva.style.display = "none";
//   divc.style.display = "none";
// });
// btn_divb.addEventListener('click', () =>{
//   divc.style.display = "block";
//   diva.style.display = "none";
//   divb.style.display = "none";
// });

