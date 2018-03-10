import React from 'react'
import { TopicPageTemplate } from '../../templates/TopicPage'

const TopicPagePreview = ({ entry, widgetFor, widgetsFor }) => (
  <TopicPageTemplate
    title={entry.getIn(['data', 'title'])}
    topics={entry.getIn(['data', 'topics']).toJSON()}
  />
)

export default TopicPagePreview
