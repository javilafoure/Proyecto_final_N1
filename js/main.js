const btn_calcular = document.querySelector('#calcular')
const form = document.querySelector('form')
const btn_clear = document.querySelector('#btn_clear')
const total = document.querySelector('#total')
const mensualidad = document.querySelector('#mensualidad')
const resultado = document.querySelector('#resultado')
const message = document.querySelector('#message')
const alert_monto = document.querySelector('#alert_monto')
const alert_year = document.querySelector('#alert_year')
const alert_interest = document.querySelector('#alert_interest')
const alert_opt = document.querySelector('#alert_opt')
const monto_deuda = document.querySelector('#monto_deuda')

btn_calcular.addEventListener('click', calcular);

form.addEventListener('input', () => {
    const formData = new FormData(form)

    clear()


    let monto = (formData.get('monto').replace(/[^0-9,.]/, ""))
    let tasa = formData.get('tasa').replace(/[^0-9.]/, "")
    


    if (monto.indexOf('.') !== -1) {
        let decimal = monto.split('.');
        decimal[1] = decimal[1].slice(0, 2);
        monto = decimal.join('.');

    }


    if (tasa.indexOf('.') !== -1) {
        let decimal = tasa.split('.');
        decimal[1] = decimal[1].slice(0, 2);
        tasa = decimal.join('.');
    }

    form.elements['monto'].value = monto
    form.elements['tasa'].value = tasa
    form.elements['cuota'].value = formData.get('cuota').replace(/[^0-9]/, "")
})

function calcular() {

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = new FormData(form)


        let p = parseFloat(formData.get('monto'));
        let r = parseFloat(formData.get('tasa')) * 12;
        let n = parseInt(formData.get('cuota')) * 12;


        if (isNaN(p)) {
            alert_monto.classList.remove('invisible')

        } if (isNaN(r)) {
            alert_interest.classList.remove('invisible')
        }
        if (isNaN(n)) {
            alert_year.classList.remove('invisible')
        }
        if (formData.get('opt') === null) {
            alert_opt.classList.remove('invisible')
        } else {

            let m = (p * r * ((1 + r) ** n)) / (((1 + r) ** n) - 1)

            if (formData.get('opt') === 'repayment') {
                mensualidad.textContent = '£ ' + (m / 12)
                total.textContent = '£ ' + m
            } else {
                mensualidad.textContent = '£ ' + ((m - p) / 12)
                total.textContent = '£ ' + (m - p)
            }
            show()

        }

    })


}


btn_clear.addEventListener('click', (e) => {
    e.preventDefault();

    form.elements['monto'].value = '';
    form.elements['tasa'].value = '';
    form.elements['cuota'].value = '';
    hidden();
    clear();
})

function show() {
    resultado.classList.add('d-flex');
    message.classList.remove('d-flex');
}

function hidden() {
    resultado.classList.remove('d-flex');
    message.classList.add('d-flex');
}

function clear() {
    alert_monto.classList.add('invisible')
    alert_year.classList.add('invisible')
    alert_interest.classList.add('invisible')
    alert_opt.classList.add('invisible')

}