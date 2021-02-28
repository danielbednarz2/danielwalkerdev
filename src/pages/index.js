import React from "react"
import Layout from "../componenets/layout";
import Hero from "../componenets/hero";
import AboutHome from "./aboutHome";
import ProjectHome from "./projectHome";
import ContactHome from "./contactHome";


const Home = () => (
  <>
    <Layout>
      <Hero />
      <AboutHome />
      <ProjectHome />
      <ContactHome />
    </Layout>
  </>
)

export default Home;