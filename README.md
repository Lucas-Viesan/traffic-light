<img src="https://lucas-viesan.github.io/traffic-ligth/TrafficLigth.png" alt="Traffic-Ligth Preview" height="500" width="1260" >

## Introdução

Este projeto simula um sistema de semáforo usando HTML, CSS e JavaScript. A simulação inclui um semáforo principal e um segundo semáforo com sequências alternadas. As luzes mudam de cor entre vermelho, amarelo e verde, simulando o comportamento de semáforos reais em um cruzamento.

## Funcionalidades

### Matrizes de cores e variáveis

Matrizes de cores : matrizes como redColors, grenColors, e yellowColorsarmazenam vários tons de cada cor.
Cor da borda : borderColoré usada como cor de borda padrão quando nenhuma luz está ativa.
Variáveis ​​de índice : Variáveis ​​como indexRed, indexGren, e indexYellowsão usadas para percorrer as cores nas matrizes.

### Funções de controle de luz

Cada função abaixo controla a cor e o comportamento de uma cor específica de semáforo:

onLigthRed:

Altera a cor vermelha do semáforo principal e atualiza a borda e os indicadores.
Lida com o cronômetro de contagem regressiva para a luz vermelha.
onLigthGren:

Controla a cor da luz verde, a atualização da borda e a contagem regressiva do indicador.
onLigthYellow:

Gerencia a cor da luz amarela e atualiza a borda, mas não usa uma contagem regressiva do indicador.

### Funções para o Segundo Semáforo

Essas funções controlam um segundo semáforo com o mesmo comportamento:

onLigthRed2
onLigthGren2
onLigthYellow2

### Lógica do Temporizador

timer:

Gerencia a sequência de luzes do semáforo principal:
Vermelho -> Verde -> Amarelo -> Vermelho.
Usado setTimeout para introduzir atrasos entre mudanças de luz.
Cada mudança de luz limpa o tempo limite do estado anterior para garantir transições suaves.

timer2:

Mesma funcionalidade, timermas para o segundo semáforo.
Repetindo a sequência
setInterval é usado para repetir continuamente as sequências de luzes a cada 16 segundos para ambos os semáforos.

## Instruções para executar

1. Clone o repositório:

```
git clone https://github.com/lucas-viesan/traffic-ligth.git


```

2. Abra no navegador o projeto e abra o arquivo index.html

```
Abra o arquivo index.html no seu navegador preferido.
```
