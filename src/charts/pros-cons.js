import React from 'react'

export const ProsCons = ({ pros, cons }) => {

  return (
    <div className="reasons">
      <ol className="reason-list">
        <h3>Pros:</h3>
      {pros.map(pro=>(<li key={pro}>{pro}</li>))}
      </ol>
      <ol className="reason-list">
        <h3>Cons:</h3>
        {cons.map(con=>(<li key={con}>{con}</li>))}
      </ol>
    </div>
  )
}
