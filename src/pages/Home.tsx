import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import HowWorks from "../components/HowWorks";
import Layout from "../components/partials/Layout";
import Ready from "../components/Ready";

function Home() {
  return (
    <Layout>
      <Banner />
      <HowWorks />
      <Features />
      <Ready />
    </Layout>
  );
}

export default Home;
