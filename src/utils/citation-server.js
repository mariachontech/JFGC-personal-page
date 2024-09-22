
import Cite from "citation-js";
require('@citation-js/plugin-bibtex')
require('@citation-js/plugin-ris')

export const getCitation = (doi)=>{

  const data = new Cite([doi]);

      return {
        bibliography_iee: data.format('bibliography', {template: "harvard1", formaat:'html'}),
        bibtex2: data.format('bibtex', {
          format: 'text',
        }),
      }
   
}

export const getCitationAsync = async(doi)=>{
  return new Promise((resolve, reject) => {

    try {
      
      Cite
      .async(doi)
      .then(cite => {
        const bibliography = cite.format('bibliography', {
          format: 'html',
          template: 'apa',
          lang: 'en-US'
        })
       
        resolve({
          bibliography_iee: bibliography,
          bibtex2: cite.format('bibtex', {
            format: 'text',
          }),
        })
      })
    } catch (error) {
      reject(error)
    }
    
  });

}

//     const refs2 = {
  //       bibliography_iee: data.format('bibliography', {
  //   format: 'html',
  //   template: 'apa',
  //   lang: 'en-US'
  // }),
  //       bibtex2: data.format('bibtex', {
  //         format: 'text',
  //       }),
  //     }