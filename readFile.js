const fs = require('fs')

fs.readFile('./note.txt', 'utf8', (err, contents) => {
  const lines = contents.split('\n')
  const formatted = lines.map(l => `[] ${l}`)
  console.log(typeof formatted);
  fs.writeFile('./contents.md', formatted, err => {
    if (err) console.log(err)
    console.log('File saved')
  })
})
