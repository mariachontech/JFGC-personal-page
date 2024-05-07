/* eslint-disable padded-blocks */

import { Icons } from '@/components/icons'
import { useToast } from '@/components/ui/use-toast'
import Cite from 'citation-js'
require('@citation-js/plugin-bibtex')
require('@citation-js/plugin-ris')



export function CitationPub({ doi }) {
  const { toast } = useToast()

  const bibliographyData = [doi]

  const reference = new Cite(bibliographyData)

  const refs2 = {
    bibliography_iee: reference.format('bibliography', {
      template: 'ieee',
      format: 'html',
    }),
    bibtex: reference.format('bibtex', {
      format: 'html',
    }),
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
          dangerouslySetInnerHTML={{ __html: refs2.bibtex }}
          className="bg-foreground text-background p-2"
        />
      ),
    })
  }

  return (
    <li className="text-foreground flex flex-col gap-2 justify-between items-start">
      <p dangerouslySetInnerHTML={{ __html: refs2.bibliography_iee }} />
      <div className=" w-full flex justify-start items-center">
        <div className=" w-24 h-10  " onClick={() => onCopy()}>
          <Icons.bibTexIcon className="fill-foreground font-bold border-foreground  cursor-copy  " />
        </div>
      </div>
    </li>
  )
}
