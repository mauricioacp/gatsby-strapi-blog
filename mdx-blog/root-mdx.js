import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Blockquote, Code, Headings,  PrismSetup } from './src/components/Complete'


const components = {
//  logic
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup
}

export const wrapMDX = ({ element }) => {

  return <MDXProvider components={components}>{element}</MDXProvider>

}