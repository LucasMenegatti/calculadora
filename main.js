document.getElementById('botaoSomar').onclick = function() {
    const num_a = parseInt(document.getElementById('num_a').value);
    const num_b = parseInt(document.getElementById('num_b').value);  
    document.getElementById('resultado').value = `${num_a+num_b}`;
}

document.getElementById('botaoSubtrair').onclick = function() {
    const num_a = parseInt(document.getElementById('num_a').value);
    const num_b = parseInt(document.getElementById('num_b').value);  
    document.getElementById('resultado').value = `${num_a-num_b}`;
}

document.getElementById('botaoMultiplicar').onclick = function() {
    const num_a = parseInt(document.getElementById('num_a').value);
    const num_b = parseInt(document.getElementById('num_b').value);  
    document.getElementById('resultado').value = `${num_a*num_b}`;
}

document.getElementById('botaoDividir').onclick = function() {
    if(document.getElementById('num_b').value != 0){
        const num_a = parseInt(document.getElementById('num_a').value);
        const num_b = parseInt(document.getElementById('num_b').value);  
        document.getElementById('resultado').value = `${num_a/num_b}`;
    } else {
        document.getElementById('resultado').value = `Impossível dividir por Zero`;
    }
}


