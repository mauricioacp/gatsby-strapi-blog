import React from "react"
import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaTwitterSquare,
} from "react-icons/fa"


const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://twitter.com">
          <FaFacebookSquare className='social-icon facebook-icon'/>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaDribbbleSquare className='social-icon dribble-icon'/>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaTwitterSquare className='social-icon twitter-icon'/>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
