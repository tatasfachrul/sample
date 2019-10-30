const app = require('express')()

app.listen(3000, () => {
  console.log('Connected!')
})

app.get('/', (req, res) => {
  res.send({ status: 200, message: 'Test success!' })
})
