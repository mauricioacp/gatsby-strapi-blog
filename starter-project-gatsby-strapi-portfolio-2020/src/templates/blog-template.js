import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';

const ComponentName = ({data}) => {

  const {blog}=data;

  //For markdown image remember to use fullpath (including localhost) in strapi markdown
  return (
    <Layout>
      <SEO title={blog.title} description={blog.description}/>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={blog.content} />
              <Link to="/blog" className="btn center-btn">
                blog
              </Link>
          </article>
        </div>
      </section>
    </Layout>
  )
};

export const query = graphql`
    query GetSingleBlog($slug: String) {
        blog: strapiBlogs(slug: { eq: $slug }) {
            content
            title
            description
        }
    }
`;

export default ComponentName;
