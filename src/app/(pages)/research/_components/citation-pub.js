/* eslint-disable padded-blocks */

import { Icons } from '@/components/icons'
import { useToast } from '@/components/ui/use-toast'
import Cite from 'citation-js'
require('@citation-js/plugin-bibtex')
require('@citation-js/plugin-ris')



export function CitationPub({ doi, ind }) {
  const { toast } = useToast()

  const bibliographyData = [doi]


  const reference = new Cite(bibliographyData)


  const refs2 = {
    bibliography_iee: reference.format('bibliography'),
    bibtex2: reference.format('bibtex', {
      format: 'text',
    }),
  }

 


  const onCopy = () => {
    navigator.clipboard.writeText(refs2.bibtex2)

    toast({
      variant: 'default',
      title: 'bibTex was been copied',
      description: (
        <p
         
        >
          <code>
            {refs2.bibtex2}
          </code>
        </p>
      ),
    })
  }

  return (
    <li className="text-foreground flex justify-start gap-2  ">
      <p className='w-[10%] '>[{ind+1}]</p> 
      <div className='w-[90%]'>
        {/* <p dangerouslySetInnerHTML={{ __html: refs2.bibliography_iee }} /> */}
        
      <div className=" w-full flex justify-start items-center">
        <div className=" w-24 h-10 cursor-pointer " onClick={() => onCopy()}>
          <Icons.bibTexIcon className="fill-foreground hover:fill-foreground/50 font-bold border-foreground py-2   " />
        </div>
      </div>
        </div> 
    </li>
  )
}
