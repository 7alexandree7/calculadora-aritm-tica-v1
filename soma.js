function somar() {

    let tn1 = window.document.querySelector("input#txtn1")
    let tn2 = window.document.querySelector("input#txtn2")
    let resultado = window.document.querySelector("p#resultado")
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let soma = n1 + n2
    resultado.innerHTML = `A some dos numeros ${n1} e ${n2} é igual a <strong>${soma} </strong>`
}