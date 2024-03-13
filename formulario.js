const formulario = document.getElementById('formulario');
const formularioInput = document.getElementById('formularioInput');

const formularioUser = data => {
    formulario.addEventListener('keyup', e => {
        e.preventDefault()
        const letraUser = formularioInput.value.toLowerCase()
        console.log(letraUser)
        const arrayFiltrado = data.filter(item => {
            const letraApi = item.name.common.toLowerCase()
            if(letraApi.indexOf(letraUser) !== -1){
                return item;
            };
        });
        allFlags(arrayFiltrado);
    });
};