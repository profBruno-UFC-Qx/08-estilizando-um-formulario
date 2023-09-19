const fs = require('fs');
import {screen} from '@testing-library/dom'

let container =  null

beforeEach(() => {
  const fileContent = fs.readFileSync('src/index.html', 'utf8');
  const cssContent = fs.readFileSync('src/css/estilo.css', 'utf-8')

  const style = document.createElement("style")
  style.innerHTML = cssContent

  document.head.appendChild(style)
  document.body.innerHTML = fileContent
});

afterEach(() => {
  // cleanup on exiting
   document.body.innerHTML = ""
   document.head.innerHTML = ""
});



test('Todos as labels devem possuir fonte de tamanho igual 1.1em', () => {

  const label1 = screen.getByText("Name:");
  let style =  window.getComputedStyle(label1);
  expect(style.fontSize).toBe('1.1em');

  const label2 = screen.getByText("Email:");
  style =  window.getComputedStyle(label2);
  expect(style.fontSize).toBe('1.1em');

  const label3 = screen.getByText("Phone:");
  style =  window.getComputedStyle(label3);
  expect(style.fontSize).toBe('1.1em');

  const label4 = screen.getByText("Message:");
  style =  window.getComputedStyle(label4);
  expect(style.fontSize).toBe('1.1em');


  // const list = screen.getAllByRole("label");
  // for (let item of list) {
  //   const styles =  window.getComputedStyle(item);
  //   expect(styles.fontSize).toBe('1.1em');
  // }
})

test('Todos os elementos elementos de entrada, incluindo o textarea, devem ter o plano de fundo na cor *#f4f4f4*', () => {
  const list = screen.getAllByRole("textbox");
  for (let item of list) {
    const styles =  window.getComputedStyle(item);
    expect(styles.backgroundColor).toBe('rgb(244, 244, 244)');
  }
})

test('Todos os elementos elementos devem ter a bordar arredondada em 3px', () => {
  const list = screen.getAllByRole("textbox");
  for (let item of list) {
    const styles =  window.getComputedStyle(item);
    expect(styles.borderRadius).toBe('3px');
  }
})

test('O botão de submit deve ter plano de fundo na cor #007bff e text na cor branca', () => {
  const button = screen.getByRole("button");
  const style =  window.getComputedStyle(button);
  expect(style.color).toBe('white');
  expect(style.backgroundColor).toBe('rgb(0, 123, 255)');
  
})

test('Todos as divs devem possuir margem inferior de 10px', () => {
  const list = screen.getAllByRole("generic");
  for (let item of list) {
    const styles =  window.getComputedStyle(item);
    expect(styles.marginBottom).toBe('10px');
  }
})

// test('Todos os paragrafos devem ter texto com a cor #323334', () => {
//   const produto1 = screen.getByText("Descrição do produto 1.");
//   let style =  window.getComputedStyle(produto1);
//   expect(style.color).toBe('rgb(50, 51, 52)');

//   const produto2 = screen.getByText("Descrição do produto 2.");
//   style =  window.getComputedStyle(produto2);
//   expect(style.color).toBe('rgb(50, 51, 52)');

//   const produto3 = screen.getByText("Descrição do produto 3.");
//   style =  window.getComputedStyle(produto3);
//   expect(style.color).toBe('rgb(50, 51, 52)');
// })


// test('Todos os elementos p.price devem ter o font-weight igual a bold', () => {
//   const produto1 = screen.getByText("R$10.00");
//   let style =  window.getComputedStyle(produto1);
//   expect(style.fontWeight).toBe('bold');

//   const produto2 = screen.getByText("R$20.00");
//   style =  window.getComputedStyle(produto2);
//   expect(style.fontWeight).toBe('bold');

//   const produto3 = screen.getByText("R$30.00");
//   style =  window.getComputedStyle(produto3);
//   expect(style.fontWeight).toBe('bold');
// })

