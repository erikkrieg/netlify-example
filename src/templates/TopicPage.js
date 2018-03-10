import React from 'react'
import Content from '../components/Content'

export const TopicPageTemplate = ({ title, topics }) => (
  <main>
    <header>
      <h1>{title}</h1>
      <a href="/">Back... 💫</a>
    </header>
    <section>
      <ul>
        {topics.map(({ text, url }, index) => (
          <li key={index}><a href={url}>{text}</a></li>
        ))}
      </ul>
    </section>
  </main>
)

export default ({ data }) => {
  if (!data) return <div>no data 🤔</div>
  const { markdownRemark: topic } = data
  const { frontmatter: { title, topics } } = topic;
  return (
    <TopicPageTemplate
      title={title}
      topics={topics}
    />
  )
}

export const topicPageQuery = graphql`
  query TopicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        topics {
          text
          url
        }
      }
    }
  }
`
