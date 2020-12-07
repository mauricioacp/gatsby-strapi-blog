import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'


const PostsPage = ({ data }) => {

  const { allMdx: { nodes: posts } } = data

  return (
    <>
      <Hero />
      <Posts posts={posts} title='All posts'/>
    </>


  )
}


export const query = graphql`
    {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
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

export default PostsPage

