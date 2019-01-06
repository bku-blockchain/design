const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(path.join(__dirname, '../dist'))

let text = `
# Design
`

files.forEach(filename => {
    text = text + `
<img src="./dist/${filename}" width="200px" />
`
})

fs.writeFileSync(path.join(__dirname, '../README.md'), text)

console.log('Success');