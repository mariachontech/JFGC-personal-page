// const  {Cite}  = require('@citation-js/core')
// require('@citation-js/plugin-doi')
// require('@citation-js/plugin-csl')

// let example =  Cite.async('10.5281/zenodo.1005176')


// example.format('bibliography', {
//   format: 'html',
//   template: 'apa',
//   lang: 'en-US'
// })


const { Cite } = require('@citation-js/core')  
require('@citation-js/plugin-bibtex')  
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')


Cite
  .async('10.1111/icad.12730')
  .then(cite => {
    const refe=cite.format('biblatex')
    const bibliography = cite.format('bibliography', {
      format: 'html',
      template: 'apa',
      lang: 'en-US'
    })

    //console.log(refe);
    //console.log(bibliography);
    
    
  
  })