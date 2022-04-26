import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import HowWorks from "../components/HowWorks";
import Layout from "../components/partials/Layout";

function Home() {
  return (
    <Layout>
      <Banner />
      <HowWorks />
      <Features />
    </Layout>
  );
}

export default Home;
