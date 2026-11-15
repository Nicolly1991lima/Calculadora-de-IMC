const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const btnCalcular = document.getElementById('btn-calcular');
const resultadoDiv = document.getElementById('resultado');

function calcularIMC() {
    // Pega os valores digitados e converte para números decimais (float)
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // Validação básica se os campos estão preenchidos corretamente
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura!");
        return;
    }

    // Fórmula matemática do IMC: Peso dividido pela altura ao quadrado
    const imc = peso / (altura * altura);
    const imcArredondado = imc.toFixed(1); // Deixa apenas 1 casa decimal (ex: 22.5)

    // Classificação do IMC e definição da cor
    let classificacao = "";
    let classeCss = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        classeCss = "abaixo";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal (Parabéns!)";
        classeCss = "normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
        classeCss = "sobrepeso";
    } else {
        classificacao = "Obesidade";
        classeCss = "obesidade";
    }

    // Exibe o resultado na tela e aplica a classe de cor correspondente
    resultadoDiv.textContent = `Seu IMC é ${imcArredondado} (${classificacao})`;
    resultadoDiv.className = ""; // Limpa classes anteriores
    resultadoDiv.classList.add(classeCss); // Adiciona a nova cor
}

// Ouve o clique no botão
btnCalcular.addEventListener('click', calcularIMC);

// Permite calcular apertando Enter no campo de altura
alturaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        calcularIMC();
    }
});