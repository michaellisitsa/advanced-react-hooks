import {useContext} from 'react'
import {StyleContext} from './StyleContext'

function HeadingsContext() {
  const level = useContext(StyleContext)
  switch (level) {
    case 1:
      return <h1>Heading {level}</h1>
    case 2:
      return <h2>Heading {level}</h2>
    case 3:
      return <h3>Heading {level}</h3>
    case 4:
      return <h4>Heading {level}</h4>
    case 5:
      return <h5>Heading {level}</h5>
    case 6:
      return <h6>Heading {level}</h6>
    default:
      throw Error('incorrect level prop passed')
  }
}

export default HeadingsContext
