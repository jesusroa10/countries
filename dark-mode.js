const btnDark = document.querySelector('.btn-darkmode');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.className === 'dark-mode'){
        btnDark.innerHTML = `<i class="fa-solid fa-moon"></i>
        Dark mode`
        localStorage.setItem('theme', 'dark-mode');
    }else{
        btnDark.innerHTML = `<i class="fa-regular fa-moon"></i>
        Dark mode`;
        localStorage.clear();
    }

    if (window.matchMedia('dark-mode').matches) {
        document.body.classList.toggle('dark-mode');
      } else {
        /* La pantalla tiene menos de 400 píxeles de ancho */
      }
})


document.addEventListener('DOMContentLoaded', () => {
    // Buscar valor en localStorage, si no existe, poner en 'off'
    let darkMode = localStorage.getItem('theme');
    // Obtener el checkbox
    if(darkMode) {
        document.body.classList.toggle('dark-mode');
    }
});
