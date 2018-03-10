import React from 'react'
import { TopicPageTemplate } from '../../templates/TopicPage'

const TopicPagePreview = ({ entry, widgetFor }) => (
  <TopicPageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

export default TopicPagePreview