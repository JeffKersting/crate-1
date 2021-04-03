// Imports
import React from 'react'

// UI Imports
import { level1 } from '../common/shadows'
import { primary } from '../common/colors'

// Component
const Card = (props) => {
  const { children, border, ...other } = props
  const selectedBorder = `1px solid ${primary}`
  return (
    <div {...other}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        div {
          border-radius: 0.2em;
          font-family: 'Roboto', sans-serif;
          box-shadow: ${ level1 };
          border: ${ border ? selectedBorder : 'none'}
        }
        `}
      </style>
    </div>
  )
}

export default Card