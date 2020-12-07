import React from 'react'
import Title from './Title'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
//...GatsbyImageSharpFluid

const query = graphql`
    {
        allInstaNode(limit: 6) {
            nodes {
                id
                localFile {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }`


const Instagram = () => {

  const data=useStaticQuery(query);
  const {allInstaNode:{nodes}}=data;
  return (
    <Wrapper>
      <Title title='Instagram'/>
      <div className='images'>
        {nodes.map((image,index)=>{
          const {localFile:{childImageSharp:{fluid}}}=image;

          return (
            <Link to={`https://www.instagram.com/p/${image.id}`}>
              <Image fluid={fluid} key={index}/>
            </Link>
           )
        })}
      </div>
    </Wrapper>)

}

const Wrapper = styled.article`
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export default Instagram
