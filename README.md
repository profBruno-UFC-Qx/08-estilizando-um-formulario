## Descrição

Neste exercício, você irá criar uma página web que exibe um formulário usado para coletar as informações de contato de um usuário.

O objetivo deste exercício é praticar maneiras de estilizar um formulário usando seletores CSS.

**Todas as alterações devem ser feitas nos arquivos já existentes**

* src/index.html -> quando for necessário alterar HTML
* src/css/estilo.css -> quando for necessário alterar CSS
* src/js/script.js -> quando for necessário alterar JavaScript

## Instruções:

 1. O arquivo **index.html** possui o formulário abaixo:

```html
<form>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
    </div>
    
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
    </div>
    
    <div>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone">
    </div>

    <div>
      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea>
    </div>
    <input type="submit">Submit</button>
  </form>
```
Usando seletores CSS, aplique os estilos a seguir:

- Altere o tamanho da fonte de todas as *label* para *1.1em*.
- Altere a cor de plano de fundo de todos os elementos de entrada, incluindo o de entrada de texto, para *#f4f4f4*.
- Altere a borda de todos os elementos de entrada de modo que elas fiquem arredondadas (3px).
- Altere a cor do texto e do plano de fundo do botão de envio do formulário para *white* e *#007bff* respectivamente.
- As divs devem ser separadas por margens inferiores de 10px

## Recomendações

**Certifique-se de validar seu código HTML usando um validador como o [W3C Markup Validation Service](https://validator.w3.org/), para garantir que seu código esteja sem erros e bem formado**.

**Experimente validar o seu código CSS em sites como:**

- <a href="https://jigsaw.w3.org/css-validator/" target="_blank">W3C CSS validation Service</a>
- <a href="https://beautifytools.com/css-validator.php" hreflang="en" target="_blank">Beatifytools CSS validator</a>
