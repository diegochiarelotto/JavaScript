function contar(){
    var inicio = document.getElementById ('txti')
    var fim = document.getElementById ('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById ('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert ('[ERRO!]Preencha os dados corretamente!')
    } else {
           // alert('Tudo ok!')
        res.innerHTML = `Contando: <br>`
        //convertendo em Numero
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        //se o passo for 0 ira receber o valor de (1)
        if (p <= 0) {
            window.alert('Passo Invalido!')
            p = 1
        }
        //iniciando o contador 
      if (i < f) {
        //contagem crescente
        for (var c = i; c <= f; c += p) {
             res.innerHTML += `${c} \u{1F449}` 
        }
    } else  {
        //contagem decrescente
        for(var c = i; c >= f; c -= p)
            res.innerHTML +=`${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
