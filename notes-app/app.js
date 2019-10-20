const validator = require('validator')
const getNotes = require("./notes.js")
const chalk = require("chalk")

const msg = getNotes()

console.log(msg)
const greenMsg = chalk.bold.green("Success!")
console.log(greenMsg)