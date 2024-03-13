const btnDark = document.querySelector('.btn-darkmode');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.className === 'dark-mode'){
        btnDark.innerHTML = `<i class="fa-solid fa-moon"></i>
        Dark mode`
    }else{
        btnDark.innerHTML = `<i class="fa-regular fa-moon"></i>
        Dark mode`
    }
})