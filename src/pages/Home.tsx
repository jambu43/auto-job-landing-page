import React from "react";
import Banner from "../components/Banner";
import HowWorks from "../components/HowWorks";
import Layout from "../components/partials/Layout";

function Home() {
  return (
    <Layout>
      <Banner />
      <HowWorks />
    </Layout>
  );
}

export default Home;
