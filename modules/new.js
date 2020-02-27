const jest = require('jest')
const getExample = require('./get-example')
const createFiles = require('./create-files')
const prompt = require('./prompt')

const base = './src/content'

;(async () => {
  const data = await prompt(base)
  data.example = await getExample(data)
  createFiles(data)

  if (data.test) {
    jest.run([`${data.section}/${data.method}`, '--watch'])
  }
})()
