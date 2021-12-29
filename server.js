const express = require('express') //criando um servidor

const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const itens = [
    {
      title: 'D',
      message: 'esenvoler aplicativos de forma fácil'
    },
    {
      title: 'E',
      message: 'JS utiliza JavaScript para renderizar HTML'
    },
    {
      title: 'M',
      message: 'uito fácil de usar'
    },
    {
      title: 'A',
      message: 'morzinho'
    },
    {
      title: 'I',
      message: 'nstall EJS'
    },
    {
      title: 'S',
      message: 'intaxe simples'
    }
  ]

  const subtitle =
    'Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript'

  res.render('pages/index', {
    qualidades: itens,
    subtitle: subtitle
  })
})

app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

app.listen(8080)
console.log('rodando')
