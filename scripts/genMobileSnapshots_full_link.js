const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(path.join(__dirname, '../snapshots'))

let text = `
# Snapshots of mobile application

Repository: 

`

files.forEach(filename => {
    if (filename.split('.')[1] != 'png') return;
    text = text + `
<img align="left" src="https://raw.githubusercontent.com/bku-blockchain/design/master/snapshots/${filename}" width="200px" />
`
})

fs.writeFileSync(path.join(__dirname, '../mobile_snapshots_full_link.md'), text)

console.log('Success');