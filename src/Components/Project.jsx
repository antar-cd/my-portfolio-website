import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/Country-project.png";
import project2 from "../assets/to-do.png"
import project3 from "../assets/medicine-doctor.png"

import "swiper/css";
import "swiper/css/pagination";
/* import {Pagination, Autoplay} from 'swiper' */

const Project = () => {
  const projects = [
    { 
      name: "Rest Country Api",
      img: project1,
      github_link: "https://github.com/antar-cd/rest-counrty-api.git",
      live_link: "https://beamish-mochi-9d16e6.netlify.app/",
    },
    {
      name: 'To Do App',
      img: project2,
      github_link: "https://github.com/antar-cd/to-do-app.git",
      live_link: "https://to-do-app-fawn-iota.vercel.app/",
    },
    {
      name: 'Medicine Doctor',
      img: project3,
      github_link: "https://github.com/antar-cd/medicine-doctor-client.git",
      live_link: "https://quiet-sorbet-81635e.netlify.app/",
    }
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Project</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="w-full  mx-auto">
          <Swiper
            slidesPerview={1.3}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
           /*  modules={[Pagination,Autoplay]} */
          >
           
            {
                projects.map((Project_info,i)=>(
                    <SwiperSlide key={i}>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={Project_info.img} alt="" className="rounded-lg" />
                <h3 className="text-xl my-4">{Project_info.name}</h3>
                <div className="flex gap-3">
                  <a
                    href={Project_info.github_link}
                    className="text-cyan-600 bg-gray-500 px-2 py-1 inline-block"
                  >
                    github
                  </a>
                  <a
                    href={Project_info.live_link}
                    className="text-cyan-600 bg-gray-500 px-2 py-1 inline-block"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
                ))
            }
          </Swiper>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Project;
