import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import EventList from "../Components/EventList";
import HowItWorks from "../Components/HowItWorks";
import BrowseVenues from "../Components/BrowseVenues";
import BrowseVendors from "../Components/BrowseVendors";
import Insipred from "../Components/Insipred";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />-
      <EventList />
      <HowItWorks />
      <BrowseVenues />
      <BrowseVendors />
      <Insipred />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
