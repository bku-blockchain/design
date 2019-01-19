const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(path.join(__dirname, './'))

let text = `
# Snapshots of mobile app
`

files.forEach(filename => {
    if (filename.split('.')[1] != 'png') return;
    text = text + `
<img align="left" src="./${filename}" width="200px" />
`
})

fs.writeFileSync(path.join(__dirname, './README.md'), text)

console.log('Success');