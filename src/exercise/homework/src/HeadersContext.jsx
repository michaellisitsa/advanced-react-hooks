import React from 'react'
import HeadingsContext from './HeadingsContext'
import SectionContext from './SectionContext'

function HeadersContext() {
  return (
    <div className="headers">
      <SectionContext level={1}>
        <HeadingsContext />
        <HeadingsContext />
        <HeadingsContext />
      </SectionContext>
      <SectionContext level={2}>
        <HeadingsContext />
        <HeadingsContext />
        <HeadingsContext />
      </SectionContext>
      <SectionContext level={3}>
        <HeadingsContext />
        <HeadingsContext />
        <HeadingsContext />
      </SectionContext>
    </div>
  )
}

export default HeadersContext
