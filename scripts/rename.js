const fs = require('fs')
const path = require('path')
const state = require('./mainifest.json')

const files = fs.readdirSync(path.join(__dirname, '../tmp'))

console.log(files)
console.log(state)

const pad = (num, size) => {
    for (num=String(num); num.length < size; num='0'+num);
    return num
}

files.forEach((filename) => {
    console.log(filename);
    fs.renameSync(
        path.join(__dirname, '../tmp', filename), 
        path.join(__dirname, '../dist', 'IMG_' + pad(++state.index, 3) + '.png')
    )
})

fs.writeFileSync(path.join(__dirname, '../dist/mainifest.json'), JSON.stringify(state, null, 4))