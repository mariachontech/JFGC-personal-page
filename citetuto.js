const Cite = require('citation-js')

async function citeMod(){

  return await Cite.async('Q30000000')
}


const data =  citeMod()

data.format('bibliography', {
  format: 'html',
  template: 'apa',
  lang: 'en-US'
})

console.log(data);