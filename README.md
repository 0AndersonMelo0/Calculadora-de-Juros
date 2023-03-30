# Trabalho-Adeilso-Calculadora-de-Juros

Trabalho bimestral do 2º Ano de informática, utilizando HTML, CSS e JavaScript.
Participantes: Anderson Melo da Silva and Devid Saboi e Silva Filho;

Este repositório contém o desenvolvimento de um código para calcular Juros Compostos e Simples, onde é usuário entrar com o capital, a taxa de juros e o
período em meses:

HTML/CSS:

O Código HTML é composto por 5 principoias DIVS, em que, a DIV principal em que se baseia todas as outras é denominada de "calc"(Calculadora);

A div "calc" é que um retângulo, na qual todo o contéudo do programa se localizará dentro deste mesmo espaço;

![calc div](https://user-images.githubusercontent.com/111611117/228699492-a10bf54a-1b16-443e-a816-57c025232234.png)

Dentro do "calc" se localiza as DIVS:
  "nom"(nome do programa) que possui como conteúdo uma tag "h3" para o título "Calculadora de Juros"
  "inpt" onde há mais divs para os inputs que receberam: o capital, a taxa de juros e o período em meses;
  "buta" que nela há um button, este que tem função de chamar a funcion calcular() e calcular2() do JavaScript;
  "inpt2" contém divs que formam retângulos, onde serar adicionado os resultados dos calculos;
  
 ![image](https://user-images.githubusercontent.com/111611117/228694339-83eebe05-e44a-471a-8c40-499e56f8f516.png)
  
  |Para informações de estilização de cada DIV/ELEMENTS deve-se acessar o código CSS|
  
<h3>JavaScript:</h3>
  
  O código JavaScript consiste em executar e mostrar o resultado de dois tipos de cálculos, Juros Simples e Compostos, que é apresentado quatro variáveis diferentes, definidas como "dinheiro", "juros", "meses" e "jsimples"/o próprio "dinheiro". Em que "dinheiro", "juros" e "meses" capturam e armazenam para cálculo os valores de ID dos elementos que são digitados pelo usuário anteriormente no HTML;
  //Obs: foi criada uma funcion getE(), para captura o valor de cada input, e joga dentor de uma lista chamada element usando o "return" .Ele também verificar se há valores válidos e caso identifique um erro não retornarar os valores e avisará o usuário.
  
 ![get()](https://user-images.githubusercontent.com/111611117/228696104-296ca1c7-9971-4814-8d35-f4cb8845235b.png)
  
  <h4>Juros Simples:</h4>
    
    Para realizar o calculo dos Juros Simples é utilizado o mesmo conceito de uma P.A (Prgressão Aritmética):
      jurosSimples = dinheiro+((juros/100)*dinheiro)*meses
  
      ![formula js](https://user-images.githubusercontent.com/111611117/228697234-10fc6234-890f-4e6d-9b7b-4944e3d0aa44.png)
       //Obs: element[] é uma função que consiste em pegar um elemento de uma lista/objeto.
  <h4>Juros Compostos:</h4>
    
    Para realizar o calculo dos Juros Compostos é utilizado o mesmo conceito de uma P.G (Prgressão Geométrica):
      deve se utilizar um laço de repetição para aumentar proporcionalmente seu valor;
  
      ![formula pg](https://user-images.githubusercontent.com/111611117/228698494-21ec2eac-32d6-4684-842f-6ae7c7bb02de.png)
  
  <h4>Logo em seguida cada calculo é adicionado ao html, usando a função: document.getElementById("").innerText = ;</h4>
  
  <h3>RESULTADO FINAL DA VISUALIZAÇÃO DO CÓDIGO JS:</h3>
  
  ![cod js](https://user-images.githubusercontent.com/111611117/228698964-f845f62e-0fee-4a8f-ae72-29c77e63c257.png)
