import React from 'react'
import { TopicPageTemplate } from '../../templates/TopicPage'

const TopicPagePreview = ({ entry, widgetFor }) => (
  <TopicPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default TopicPagePreview