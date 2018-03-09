import React, { Fragment } from 'react'

export default ({ content }) => (
  <Fragment>
    {typeof content === 'string' ? (
      <div dangerouslySetInnerHTML={{ __html: content }} />
    ) : (
      <div>{content}</div>
    )}
  </Fragment>
)
