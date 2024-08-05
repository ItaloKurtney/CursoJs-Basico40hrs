Curso JS

MODULO A
O que JS é capaz de fazer?
Dicas de aprendizagem
JS versus ECMAScript
Requisitos de Software
Primeiros scripts em JS

Aula 1 - O que JS é capaz de fazer?

O Js é voltado para o Cliente,ou seja para uma pagina Web,envolvendo as liguagens de programação
HTML,CSS,JavaScript
Mostrando a diferença dos sites com JS e sem JS,Google,YouTube,Uber,LinkedIn,

Aula 2 - Evolução do javaScript

1995 Criação do JavaScript pela empresa NetScape
1997 Padronização do JavaScript sendo criada a ECMAScript que é o JS padronizado
2002 Netscap falindo e sendo um novo navegador o FireFox
2008 Google criando o navegador mais usado sendo o Google Chrome
2010 Criação do NodeJs sendo uma maquina que roda Js fora do navegador,

Tecnologias que surgiram por causa do JS
Jquery,Angular,React,VueJs,Electrom,Ionic,

Aula 3 - Duvidas e Requisitos para começar 

Como aprender programar? Assitindo videos,Praticando,Ler conteudos,Anotações,Interações com outras pessoas.Participando de Forums,persistir,Usar bibliotecas

Não existe linguagem certa para aprender e sim qual é sua nescessidade e proposito para gostar da linguagem
Aprendendo instalar o VisualStudioCode,Navegador Chrome e o NodeJS para rodar o Js fora do navegador

Aula 4 - Criando o primeiro Script(Aula pratica)

Aprendendo a usar o VisualStudio e criando os primeiros comandos
window.alert('Minha primeira mensagem'); /// Mostra um alerta com a mensagem na tela
window.confirm('Esta gostando de JS?'); /// Comando de confirmação.
window.prompt('Qual é seu nome?') /// comando para o usuário digitar na janela de alerta


MODULO B

Armazenamento de dados
Tratamendo de dados
Operações de dados

Aula 5 - Tipos de Dados e variavel

Sinal de '=' em JS é Recebe algo

O que é uma variavel? É um espaço na memória onde ficará salvo dados de varios tipos
Aprendendo abrir o terminal no VScode

O nome de cada variavel a gente chame de indentificador que existe regras:
-Podem comecar com letras, $ ou _
-Não podem comecar com numeros
-Podem usar letras com numeros
-Não podem usar espaços e palavras reservadas

Aprendendo abrir o terminal no VScode Ctrl + Shift + Crase 

Dicas para nomes de variaveis:
- Escolher nomes coerentes
- Letras Maiusculas e minusculas fazem diferença

Tipos de variavéis: number (1,2,3..), string (abc..) boolean (verdadeiro ou falso...),Object,Null,Function,Undefined
Typeof: comando para saber qual é o tipo de variavel

Aula 6 - Tratamento de dados

Aprendendo a guardar dados
Aprendendo comentar codigos em HTML,CSS e JS
o + pode servir para adição e concatenação

Aprendendo a converter variavel String para numero: 
Number.parseInt(n)
Number.parseFloat(n)
Number(n)

Aprendendo a converter variavel Numero para String: 
String(s)

Formatando Strings
s.lenght : quantos caracteres a string tem
s.toUpperCase() : tudo para letras MAIUSCULAS
s.toLowerCase() : tudo para letras minusculas

Formatando Numeros 
n1.toFixed(2)

AULA 7 -  Operadores pt 1
Aritmeticos,atribuição,relacionais,lógicos,ternário

Aritmeticos: Usados para fazer calculos (Somar + , Menos - , Multiplicação *, Divisão /, Resto de divisão inteira %, Potencia**)

Ordem de precedência:  ( ) potencias, multiplicação e resto de divisão, mais e menos]

Aprendendo a fazer auto-atribuições e incrementos

AULA 8 -  Operadores pt 2
Relacionais : Maior >, Menor <, Maior ou igual >=, Menor ou igual <=, Igual ==, É diferente !=
É indentico === 

Lógicos : ! Negação , && Conjunção(E) , || Disjunção(Ou)

Ternários  ( ? e  : )junta tres operando Teste? True : False
Testa se é verdadeiro ou falso,o que vai acontecer se der verdadeiro,o que vai acontecer se for falso
Exemplo
var media = 6.5 
media >= 7?'aprovado': 'Reprovado' // vai mostrar reprovado 

Ordem de Precedencia: Aritmeticos, Relacionais, Lógicos


MODULO C
Conhecendo o DOM
Entender o Documente Object Model (DOM)
Arvore DOM
Manipular o DOM

AULA 9 - Introdução ao DOM(Documente Object Model)
O que é DOM? É um conunto de objetos dentro de um navegador,que da acesso a componentes internos,e nao funciona no NodeJS

É possivel selecionar elementos da Arvore DOM
Por Marca: getElementsByTagName() [ ] - indentificador 
Por Id: getElementById()
Por nome: getElementsByName()[ ] 
Por classe: getElementsByClassName()
Por Seletor : querySelector() // querySelectorAll()

AULA 10 - Eventos DOM
Oque é  Eventos? É tudo oque pode acontecer com qualquer elementos
Oque é uma Função? É um conjunto de linhas/Blocos que só vão acontecer quando ter algum evento
Como descobrir os erros do JS
Aprendendo a fazer uma calculadora em Js

MODULO D - Condições em JS
Condições Simples
Condições Compostas
Condições Mutiplas
Exercicios Propostos

AULA 11 - Condições 
Tipos de condições Cond.Simples(True) Cond.Composta(True e Else).
Aprendendo usar a extenção NODE EXEC (F8)
Usando condições na pratica em JS no VScode

AULA 12 - Condições pt2
Condições Aninhadas (ELSE IF)
Aprendendo usando condições aninhadas na pratica em JS no VScode
Condição Multipla (SWITCH) break são obrigatorios a cada final de bloco de comando.Funciona apenas com numeros inteiros ou caracteres e nao intervalos

Exercicios do modulo.Dois projetos basicos usando HTML,CSS e JS com base em aprendizados ate agora.

MODULO E - Repetições em JS
Repetições com teste logico no inicio/ WHILE
Repetições com teste no Final /DO WHILE
Repetições com controle FOR
Exercicios propostos

AULA 13 - Repetições em JS
WHILE(QUANDO FOR VER WHILE CHAME DE ENQUANTO(condição for verdadeira))
// Testando o comando While/ENQUANTO = Estrututa de repeticão com teste logico no inicio
// Testando o comando DO While/ENQUANTO = Estrututa de repeticão com teste logico no no final

AULA 14 -  Repetições em JS pt2
Estrutura de repetição com variavel de controle(inicialização,testes logicos e incremento) FOR
Aprendendo usar a Depuração

Exercicios do modulo. Dois Exercicios do modulo.Dois projetos basicos usando HTML,CSS e JS com estruturas de repetições com base em aprendizados ate agora.

MODULO F - Avançando os estudos em JavaScript
Variaveis compostas
Funcões 
Exercicios propostos

AULA 15 - Variaveis compostas(Arrays/Vetor)
O que é Variaveis? Só armazenam um valor por vez
O que é Variaveis compostas(Arrays/Vetor)?Armazenam varios valores e elementos em uma mesma estrutura,é uma variavel com varios elementos cada elemento tem seu valor e uma chave de indentificação
vaga a =  [ indice que comeca no zero ]
num.push(7)// Adicionando valor na ultima posição,usando um metodo interno,adicioando um novo elemento e o indice dela
num.length // Atributo para saber qual é o tamanho o vetor
num.sort()// Metodo interno para ordenar os valores dentro do vetor/arrays

AULA 16 - Funções 
Uma função possui uma chamada,um conjunto de parametros ,executa a ação e da um retorno.São ações executadas assim que são chamadas ou ao decorrrer de um evento.
Uma função apenas da um retorno.

Aula exercicios do modulo utilizando funções

AULA 17 - Considerações finais, e revisão
Nossa rota ate aqui 
Fundamentos (Oque é Js?Como surgiu?Seu paradigma,aprendedno usar NodeJs)
Variaveis e dados(Como colocar esses dados,Como o Js trata os tipos primitivos)
Operadores(Aritmeticos,atribuição,relacionais,lógicos,ternário)
Condições(If simples compostos e aninhados)
Repetições(For,While,Do While)
Arryas(Variaveis compostas)
Funcoes()
DOM(Document Object Model)

Sugestões de Estudos(Funções,Objetos,Modularização,RegEx,JSON,AJAX,NodeJS)

O que é um Objeto?São Variaves e que podem guardar funcionalidades(Função) chamados de metodos 
