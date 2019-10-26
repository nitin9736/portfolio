import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contact page</h1>
    <p>Email : nitinnimbalkar20@gmail.com</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
