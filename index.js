const express = require('express')
const path = require('path')
const app = express()

port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'public')))
app.set('view engine', 'ejs')

app.get('/',(req, res, next) => {
	return res.render('home')
});

app.listen(port, (error) => {
	if (error) {
		console.log(`Erro ao tentar se conectar a http://localhost:${port}`)
	}else{
		console.log(`Servidor rodando em https://localhost:${port}`)
	}
})