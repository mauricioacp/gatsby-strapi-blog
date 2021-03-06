import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {

  const { pageContext:{category} }=props;
  const {data:{categories:{nodes:posts}}}=props;


  return (
    <Layout>
      <Hero/>
      <Posts posts={posts} title={`category / ${category}`}/>
    </Layout>
  )
}

export const query=graphql`
    query GetCategories($category:String) {
        categories:allMdx(sort: {fields: frontmatter___date, order: DESC}, filter:{frontmatter:{category:{eq:$category}}}) {
            nodes {
                excerpt
                frontmatter {
                    slug
                    date(formatString: "MMMM Do,YYYY")
                    author
                    category
                    readTime
                    title
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                id
            }
        }
    }
`


export default CategoryTemplate
