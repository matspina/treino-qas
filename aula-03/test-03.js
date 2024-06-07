const texto = 'aqui temos um texto bla bla'
// Sbstitue o texto e salva na const texto2:
const texto2 = texto.replace('texto', 'é')
console.log(texto2)

const number1 = 2.4
// Arredonda pra cima:
console.log(Math.ceil(number1))
// Cria um número randomico (de 0 até 0,999...),
// multiplica por 10 e arredonda pra baixo para obter um número randomico entre 0 e 9:
console.log(Math.floor(Math.random() * 10))