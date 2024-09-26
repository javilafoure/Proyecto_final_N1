const btn_calcular = document.querySelector('#calcular')
const form = document.querySelector('form')
const btn_clear = document.querySelector('#btn_clear')
const total = document.querySelector('#total')
const mensualidad = document.querySelector('#mensualidad')

btn_calcular.addEventListener('click', calcular);

function calcular() {

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = new FormData(form)

        let p = parseFloat(formData.get('monto'));
        let r = parseFloat(formData.get('tasa')) * 12;
        let n = parseInt(formData.get('cuota')) * 12;

        let m = (p * r * ((1 + r) ** n)) / (((1 + r) ** n) - 1)

        if (formData.get('opt') === 'repayment') {
            mensualidad.textContent = '£ ' + (m / 12)
            total.textContent = '£ ' + m
        } else {
            console.log(formData.get('opt'));
            mensualidad.textContent = '£ ' + ((m - p) / 12)
            total.textContent = '£ ' + (m - p)
        }
    })
}


btn_clear.addEventListener('click', (e) => {
    e.preventDefault();

    form.elements['monto'].value = '';
    form.elements['tasa'].value = '';
    form.elements['cuota'].value = '';
})
