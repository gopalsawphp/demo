import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeSlider from "./components/home/home-slider";
import SteperGuide from "./components/home/steperGuide";
import Testimonials from "./components/shared/testimonials";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <HomeSlider />
      <SteperGuide />
      <Testimonials />
      <Footer />
    </>
  );
};
export default App;
