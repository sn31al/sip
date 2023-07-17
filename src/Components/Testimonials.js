import React from "react";

const Reviews = [
  {
    img: "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_640.jpg",
    review:
      "  ..I wanted to say thank you to you and the staff of Event Solutions. You have definitely created an enormous amount of confidence for us to use the company  in the future.",
    name: "Niyomi",
    rating: "⭐⭐⭐⭐",
  },
  {
    img: "https://www.eventx.io/hubfs/how%20to%20get%20started.webp",
    review:
      "It is a great platform to find good accommodations . Very easy an straightforward interface, great deal. Often, Ed event offers cheaper prices than direct bookings, which is awesome! ",
    name: "Lukasz Filip",
    rating: "⭐⭐⭐",
  },
  {
    img: "https://cdn.asp.events/CLIENT_JEC_Grou_6AF8533B_A785_E68C_038072A9950C5023/sites/JEC-World-2023/media/program_header_1.png",
    review:
      "Has one of the best customer service ever! I encountered a problem with my booking reservation and contacted them on what's best I do for my situation and they were there to guide me all throughout!!",
    name: "Xian",
    rating: "⭐⭐⭐⭐⭐",
  },
];

export default function Testimonials() {
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl">Reviews</h1>

      <div className="grid lg:grid-cols-3 p-6 gap-2">
        {Reviews.map((_, index) => {
          return (
            <div className="space-y-4 shadow-xl rounded-2xl py-4">
              <div className="flex items-center justify-center py-4">
                <img
                  className="max-w-sm rounded-2xl "
                  src={_.img}
                  alt="img.png"
                />
              </div>
              <div className="flex items-center justify-center">
                <p className="text-[#676767] text-md max-w-sm text-center">
                  {_.review}
                </p>
              </div>
              <div className="flex justify-around pt-8">
                <p>-{_.name}</p>
                <p>{_.rating}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
