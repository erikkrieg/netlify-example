import React from 'react'
import Content from '../components/Content'

export const TopicPageTemplate = ({ title, content }) => (
  <main>
    <header>
      <h1>{title}</h1>
      <a href="/">Back... 💫</a>
    </header>
  </main>
)

export default ({ data }) => {
  const { markdownRemark: topic } = data
  console.log(data)
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
