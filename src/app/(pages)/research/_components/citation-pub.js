"use client"
/* eslint-disable padded-blocks */

import { Icons } from '@/components/icons'
import { useToast } from '@/components/ui/use-toast'
//import Cite from 'citation-js'
import { useEffect, useState } from 'react'

import  {Cite}   from '@citation-js/core'
require('@citation-js/plugin-bibtex')
require('@citation-js/plugin-ris')

import { getCitation, getCitationAsync } from '../../../../utils/citation-server'
import { Copy, Loader2 } from 'lucide-react'



export function CitationPub( doi ) {
  const [reference, setreference] = useState({});
  const [loading, setloading] = useState(true)
  const { toast } = useToast()

  
  const bibliographyData = doi.doi
  
  useEffect(() => {
    
   getCitationAsync(bibliographyData).then((data)=>{
    setreference(data)
   }).catch((error)=>{
    console.log(error);
   }).finally(()=>{
    setloading(false)
   })
    
  }, [bibliographyData])


  // useEffect(() => {
  //   console.log("entro");
    
  //   if(loading===true){
  
  
  //       setloading(false)

  //   }
  // }, [reference])
  
  


  console.log(loading);
  

 


  const onCopy = () => {
    navigator.clipboard.writeText(reference.bibtex2)

    toast({
      variant: 'default',
      title: 'bibTex was been copied',
      description: (
        <p
         
        >
          <code>
            {reference.bibtex2}
          </code>
        </p>
      ),
    })
  }

  return (
    <div className='p-4'>

     {
      loading && <div className="w-full flex justify-center items-center">
      <Loader2 className="animate-spin" />
    </div>
     }
    <li className="text-foreground flex flex-col  justify-start gap-5 ">
      <div className='w-[90%]'>
        <p dangerouslySetInnerHTML={{ __html: reference.bibliography_iee }} /> 
        
        </div> 
      <div className=" w-full flex justify-end items-center">
        <div className=" w-24 h-10 cursor-pointer " onClick={() => onCopy()}>
          {/* <Icons.bibTexIcon className="fill-foreground hover:fill-foreground/50 font-bold border-foreground py-2   " /> */}
          <Copy className="h-4 w-4" />
        </div>
      </div>
    </li>

    </div>
  )
}
