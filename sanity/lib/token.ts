import 'server-only'

import { experimental_taintUniqueValue } from 'react'

export const token = process.env.SANITY_API_READ_TOKEN

if (!token) {
  // Don't throw at import time so `next build` without env doesn't crash.
  // Draft/preview fetches will fail explicitly when they actually need it.
  console.warn(
    'Missing SANITY_API_READ_TOKEN: draft/preview mode will not work.',
  )
} else {
  experimental_taintUniqueValue(
    'Do not pass the sanity API read token to the client.',
    process,
    token,
  )
}
