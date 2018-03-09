import React from 'react'

export const TopicPageTemplate = ({ title, content }) => (
  <div>
    <h1>Topic Page Template</h1>
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)

export default ({ data }) => {
  const { markdownRemark: topic } = data

  return (
    <TopicPageTemplate
      title={topic.frontmatter.title}
      content={topic.html}
    />
  )
}

export const topicPageQuery = graphql`
  query TopicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
