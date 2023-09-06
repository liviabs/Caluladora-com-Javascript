function calculadora(){
  const operaçao = Number(prompt('Escolha uma operaçao: \n 1- Soma (+)\n 2- Subtração (-)\n 3- Multiplicação (*)\n 4- Divisão real (/)\n 5- Divisão inteira (%)\n 6- Potenciação (**)'));

    if(!operaçao ||operaçao>6){
      alert('Erro | Operação inválida!')
      calculadora()
    }else{
      let n1 = Number(prompt('Insira o primeiro valor:'));
      let n2 = Number(prompt('Insira o segundo valor:'))
      let resultado;

      if(!n1 || !n2){
        alert('Erro | Parâmetros inválidos!');
        calculadora()
      }else{
        function soma(){
          resultado = n1+n2;
          alert(`${n1} + ${n2} = ${resultado}`)
          novaOpcao()
        }
        function subtracao(){
          resultado = n1-n2;
          alert(`${n1} - ${n2} = ${resultado}`)
          novaOpcao()
        }
        function multiplicacao(){
          resultado = n1*n2;
          alert(`${n1} * ${n2} = ${resultado}`)
          novaOpcao()
        }
        function divisaoReal(){
          resultado = n1/n2;
          alert(`${n1} / ${n2} = ${resultado}`)
          novaOpcao()
        }
        function divisaoInteira(){
          resultado = n1%n2;
          alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
          novaOpcao()
        }
        function potenciacao(){
          resultado = n1**n2;
          alert(`${n1} elevado a ${n2} é igaul a ${resultado}`)
          novaOpcao()
        }
    
        function novaOpcao(){
          let opcao = prompt('Deseja fazere outra operação?\n 1- Sim\n 2- Não')
        
          if (opcao ==1){
            calculadora()
          } else if(opcao ==2){
            alert('Até mais!')
          }else {
            alert('Digite uma opção válida!')
            novaOpcao()
          }
  
        }
  
      /*if (operaçao ==1){
        soma()
      }else if (operaçao ==2){
        subtracao()
      }else if (operaçao ==3){
        multiplicacao()
      }else if (operaçao ==4){
        divisaoReal()
      }else if (operaçao ==5){
        divisaoInteira()
      }else if (operaçao ==6){
        potenciacao()
      }*/
      
      switch (operaçao){
        case 1:
          soma();
          break
        case 2:
          subtracao();
          break
        case 3:
         multiplicacao();
          break
        case 4:
          divisaoReal();
          break
        case 5:
          divisaoInteira();
          break
        case 6:
          potenciacao();
          break;
      }

    }
          
  }
  
}
calculadora();