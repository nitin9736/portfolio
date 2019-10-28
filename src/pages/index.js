import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* 
    <h1>Hi people</h1>
    <p>My Name is Nitin Nimbalkar</p>
    <p>Development of this website is still in progress. Building this website with gatsby which uses react and node js under the hood</p>
    <p> Watch this space</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <SEO title="Home" />
    <div class="content">
        <h1>Hi, I am <a href="https://twitter.com/nitin0703">Nitin Nimbalkar</a></h1>
        <p>Front-End Engineer with 8+ year's of experience building products for domains like IOT, e-learning, enterprise and now Fin-Tech.</p>
        <p>Worked on many client side technologies like HTML5, CSS3, JS and libraries / frameworks like jQuery, React, Handlebars, Underscore, Angular JS,  Bootstrap, SCSS, Grunt and Webpack for building scalable web applications.</p>
        <p>Currently am working as UI developer in Western Union</p>


        <i>**** Building portfolio is still in progress. Building this website with gatsby which uses react and node js under the hood ***</i>
        
    </div>
  </Layout>
)

export default IndexPage
