// src/components/Testimonials.js

import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            What Others Say
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dolorem quibusdam cupiditate, voluptate rem ad alias!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-800 p-8 rounded">
              <p className="leading-relaxed mb-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                interdum purus eget nibh luctus, sed hendrerit arcu ultricies."
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="./person-1.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <div className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Jane Doe
                  </span>
                  <span className="text-gray-500 text-sm">UI/UX Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-800 p-8 rounded">
              <p className="leading-relaxed mb-6">
                "Phasellus non lacus at arcu scelerisque consectetur vel id orci.
                Fusce malesuada orci vitae dui porttitor sollicitudin."
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="./person-2.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <div className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    John Smith
                  </span>
                  <span className="text-gray-500 text-sm">Web Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-800 p-8 rounded">
              <p className="leading-relaxed mb-6">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam."
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="./person-3.jpg"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <div className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Sarah Lee
                  </span>
                  <span className="text-gray-500 text-sm">Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
