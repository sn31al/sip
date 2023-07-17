import React from "react";
import Navbar from "../Components/Navbar";

const About = () => {
    return(
        <div>
        <Navbar/>
        <div className="m-4">
            <h1 className="text-4xl font-bold text-center">About Us</h1>
            <div className="flex flex-col items-center justify-around pt-5 mt-10 space-y-10 lg:flex-row lg:space-y-0">

                <div className="flex flex-col items-center justify-center max-w-lg space-y-8">
                <p className="text-xl font-semibold text-center  lg:text-3xl lg:text-start">The Final Frontier of Growth. Be the Go-To Venue for Great Events</p>
                <p className="text-[#676767]  text-center lg:text-start">The easiest way to manage authorised events when you're planning an event on a short timeline, you don't have the luxury of thoroughly vetting venues, let alone taking the time to find and select the right venue. To speed up your venue search, turn to technology</p>
                </div>

                <div className="flex justify-center">
                    <img className="max-w-sm rounded-lg md:max-w-md lg:max-w-lg" src="https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?cs=srgb&dl=pexels-icsa-1708936.jpg&fm=jpg" alt=""/>
                </div>

            </div>
            </div>
        </div>
    )
}

export default About;