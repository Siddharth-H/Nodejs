const fs = require('fs')

fs.writeFileSync('notes.txt', 'Wanna dont eat a pizza')
fs.appendFileSync('./notes.txt', 'Oh wait! Maybe I will eat just one slice')
