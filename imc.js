//todos os id que serão pegos pelo DOM 
// Estes são os DOM Globais 

const calcular = document.getElementById('calcular');


//Como inputar um valor
// o "." serve para acessar uma propriedade do Nome ---> nome.value = 'Pedro'

//No botão quando alguem clicar, chamará a função IMC
calcular.addEventListener("click", imc);

function imc (){
    // alert("teste click") -- serve para verificar se o  evento click está funcionando

    //Coloca-se dentro da função para responder somente for chamada atraves do click
     // nome.value é para vericiar se o usuario digitou algo na caixa do input
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //Verificar se os campos estão preenchidos
    // " " -- > Nulo 
   
    if (nome !== "" && altura!== "" && peso !== ""){
   
        //Formula para calular o imc
        //toFixed --> serve para arredondar as casas decimais para 1 === 20,1
        const valorIMC= (peso / Math.pow(altura,2)).toFixed(1);


        //Classificação vai ser preenchida de acordo com o valor o IMC
        let classificacao = "";

        if(valorIMC <= 18.5){
            classificacao = "Abaixo do peso"
        } else if(valorIMC >= 18.6 && valorIMC <= 25 ){
            classificacao = "Peso Ideal, Parabéns!!!"
        }else if(valorIMC >= 25.1 && valorIMC <= 30 ){
        classificacao = "Levemente Acima do Peso!!!"
        }  else if(valorIMC >= 30.1 && valorIMC <= 35 ){
            classificacao = "Obesidade Grau I. Atenção!!!"
        }  else if(valorIMC >= 35.1 && valorIMC <= 40 ){
            classificacao = "Obesidade Grau II. Atenção!!!"
        }else {
            classificacao = "Obesidade Grau III. Cuidado!!!"
          }



        //Mostrar o imc na caixa de resultado
        resultado.textContent =`${nome}, o seu IMC é ${valorIMC} e a sua classficação é ${classificacao}`;

        } else{
        //Colocar o texto dentro da caixa resultado
         resultado.textContent = "Preencha todos os campos"
    }
 }