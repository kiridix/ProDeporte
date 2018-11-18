var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3231

io.on('connection', (scoket) => {
	console.log("conected")
	// io connections


})

app.listen(PORT, ()=>{
	console.log("Connected to port:" + PORT);
})