function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Falta dados!')
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = `Contando: `

        if (i < f) {
            for (i = i; i <= f; i += p) {
                res.innerHTML += ` ${i} \u{1F449}`
            }
        } else{
            for (i = i; i >= f; i -=p){
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }
        res.innerHTML += `${i} \u{1F3C1} `
    }
}