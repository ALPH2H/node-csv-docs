import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'

const Page = ({
  data,
}) => {
  const { page } = data
  return (
    <Layout page={{ ...page.fields, ...page.frontmatter }}>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($path: String!) {
    page: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        keywords
      }
      fields {
        edit_url
        slug
      }
    }
  }
`
