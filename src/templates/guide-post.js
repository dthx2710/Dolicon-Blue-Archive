import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GuidePostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  author,
  contributors,
  title,
  date,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <h4>by {author} on {date}</h4>
            <p>{description}</p>
            <PostContent content={content} />
            {contributors && contributors.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Contributors</h4>
                <ul className="taglist">
                  {contributors.map((contributor) => (
                    <li key={contributor + `contributor`}>
                      <p>{contributor}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

GuidePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const GuidePost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GuidePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Guide">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        author={post.frontmatter.author}
        contributors={post.frontmatter.contributors}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

GuidePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default GuidePost

export const pageQuery = graphql`
  query GuidePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        author
        contributors
        tags
      }
    }
  }
`
