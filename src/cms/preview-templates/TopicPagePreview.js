import React from 'react'
import { TopicPageTemplate } from '../../templates/TopicPage'

const TopicPagePreview = ({ entry, widgetFor }) => (
  <TopicPageTemplate
    title={entry.getIn(['data', 'title'])}
    topics={entry.getIn(['data', 'topics'])}
  />
)

export default TopicPagePreview