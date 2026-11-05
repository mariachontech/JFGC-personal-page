'use client'
/* eslint-disable padded-blocks */

import { Icons } from '@/components/icons'
import { useToast } from '@/components/ui/use-toast'
//import Cite from 'citation-js'
import { useEffect, useState } from 'react'

import { Cite } from '@citation-js/core'
require('@citation-js/plugin-bibtex')
require('@citation-js/plugin-ris')

import DOMPurify from 'isomorphic-dompurify'

import {
  getCitation,
  getCitationAsync,
} from '../../../../utils/citation-server'
import { Copy, Loader2 } from 'lucide-react'

export function CitationPub({ doi }) {
  const [reference, setreference] = useState({
    bibliography_iee: '',
    bibtex2: '',
  })
  const [loading, setloading] = useState(true)
  const [error, setError] = useState('')
  const { toast } = useToast()

  const bibliographyData = doi

  useEffect(() => {
    let cancelled = false
    if (!bibliographyData) {
      setloading(false)
      return
    }
    setloading(true)
    setError('')

    getCitationAsync(bibliographyData)
      .then((data) => {
        if (cancelled) return
        setreference(data)
      })
      .catch(() => {
        if (cancelled) return
        setError('Could not resolve this DOI.')
      })
      .finally(() => {
        if (cancelled) return
        setloading(false)
      })

    return () => {
      cancelled = true
    }
  }, [bibliographyData])

  // useEffect(() => {
  //   console.log("entro");

  //   if(loading===true){

  //       setloading(false)

  //   }
  // }, [reference])

  console.log(loading)

  const onCopy = async () => {
    if (!reference.bibtex2) return
    try {
      await navigator.clipboard.writeText(reference.bibtex2)
      toast({
        variant: 'default',
        title: 'BibTeX copied',
        description: (
          <p>
            <code>{reference.bibtex2}</code>
          </p>
        ),
      })
    } catch {
      toast({
        variant: 'destructive',
        title: 'Copy failed',
        description: 'Clipboard is not available in this context.',
      })
    }
  }

  const safeHtml = DOMPurify.sanitize(reference.bibliography_iee || '')

  return (
    <div className="p-4">
      {loading && (
        <div className="w-full flex justify-center items-center">
          <Loader2 className="animate-spin" />
        </div>
      )}
      {!loading && error && <p className="text-sm text-destructive">{error}</p>}
      <li className="text-foreground flex flex-col  justify-start gap-5 ">
        <div className="w-[90%]">
          <p dangerouslySetInnerHTML={{ __html: safeHtml }} />
        </div>
        <div className=" w-full flex justify-end items-center">
          <div className=" w-24 h-10 cursor-pointer " onClick={() => onCopy()}>
            <Copy className="h-4 w-4" />
          </div>
        </div>
      </li>
    </div>
  )
}
