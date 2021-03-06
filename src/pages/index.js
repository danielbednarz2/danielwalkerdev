import React, { useEffect } from "react"
import Layout from "../componenets/layout";
import Hero from "../componenets/hero";
import AboutHome from "../componenets/aboutHome";
import ProjectHome from "../componenets/projectHome";
import ContactHome from "../componenets/contactHome";


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return ( 
  <>
    <Layout>
      <Hero />
      <AboutHome />
      <ProjectHome />
      <ContactHome />
    </Layout>
  </>
  )
}

export default Home;