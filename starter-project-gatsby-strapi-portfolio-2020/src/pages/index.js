import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import SEO from '../components/SEO';

export default ({ data }) => {

  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs }
  }
    = data;

  return (
    <Layout>
      <SEO title="Home" description="This is our home page"/>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Featured Projects" showLink />
      <Blogs blogs={blogs} title="Latest Articles" showLink/>
    </Layout>
  );
}
// ...GatsbyImageSharpFluid
export const query = graphql`
    {
        allStrapiProjects(filter: {featured: {eq: true}}){
            nodes{
                github
                id
                description
                title
                url
                image{
                    childImageSharp{
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                stack{
                    id
                    title
                }
            }
        }
        allStrapiBlogs(filter: {}, sort: {fields: date, order: ASC}, limit: 3) {
            nodes {
                slug
                description
                date(formatString: "MMMM Do, YYYY")
                title
                category
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }`;
