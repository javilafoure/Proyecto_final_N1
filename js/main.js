const btn_calcular = document.querySelector('#calcular')
const form = document.querySelector('form')
const btn_clear = document.querySelector('#btn_clear')
const total = document.querySelector('#total')
const mensualidad = document.querySelector('#mensualidad')

btn_calcular.addEventListener('click', calcular);

function calcular() {

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        // form.innerHTML = ''

        const formData = new FormData(form)

        let P = parseFloat(formData.get('monto'));
        let r = parseFloat(formData.get('tasa')) * 12;
        let n = parseInt(formData.get('cuota')) * 12;

        console.log(P);
        console.log(r);
        console.log(n);
    })
}


btn_clear.addEventListener('click', (e) => {
    e.preventDefault();

    form.elements['monto'].value = '';
    form.elements['tasa'].value = '';
    form.elements['cuota'].value = '';
})

// total.textContent += 'hola mundo'

// montos.addEventListener('input', ()=>{
//     console.log(montos.value);
// })

// M = Pago mensual.
// P = Monto del préstamo.
// r = Tasa de interés mensual (tasa de interés anual dividida por 12).
// n = Número total de pagos (número de años multiplicado por 12).
