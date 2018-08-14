import React from "react"
import Layout from "../components/layout"
import WorkGrid from "../components/workGrid"
import  "../styles.css"

export default () => (
  <Layout>
      <div className="hero">
        <div className="hero-text">
            <h1>Jack Boyle</h1>
            <h2>Full Stack Mobile/Web Developer</h2>
            <p>
                Building mobile/web applications is my speciality! Feel free to view my work below.
            </p>
        </div>
    </div>
    <WorkGrid />
  </Layout>
)
