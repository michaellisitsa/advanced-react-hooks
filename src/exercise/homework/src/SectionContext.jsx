import {StyleContext} from './StyleContext'

function SectionContext({children, level}) {
  return (
    <section>
      <StyleContext.Provider value={level}>{children}</StyleContext.Provider>
    </section>
  )
}

export default SectionContext
