import Layout from "../../component/layout";
import Button from "../../component/Button";
import quality from "../../assets/img/quality.png";
import collaborate from "../../assets/img/collaborate.png";
import learning from "../../assets/img/learning.png";
import React from "react";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
     <div className="flex flex-col pt-5 sm: p-2  md: lg:w- m-auto">
       <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg shadow-lg p-6 mb-6">
            <h1 className="text-xl p-6 text-purple-500 sm:text-xl md:text-xl lg:text-4xl">About Me</h1>
             <p className="text-lg text-center max-w-2xl sm:text-sm md:text-lg lg:text-xl">
              I am a passionate web developer with a love for creating dynamic and responsive web applications. 
              </p>
            </div>
           <div className="md:flex gap-5 mt-2 h-[60%] lg:m-20 lg: w-[40]">
           <div className=" p-5 m-5 bg-white shadow-xl rounded-lg mt-6 sm: m-0 w-full max-w-sm lg: w-[30%]">
            <h2 className=" p-2 sm:text-sm md:text-sm text-purple-500">What I Do</h2>
            <p className="">I specialize in frontend development, focusing on building user-friendly interfaces and ensuring a seamless user experience.</p>
            <p className="">With a background in computer science, I have honed my skills in various programming languages and frameworks.</p>
            <p className="">I am always eager to learn new technologies and improve my craft.</p>
          </div>
        <div className=" p-5 m-5 bg-white shadow-xl rounded-lg mt-6 sm: m-0 w-full max-w-sm md:mb-0 w-[100%]">
            <h2 className="text-sm p-2 text-purple-500">My Story</h2>
           <p className="text-[16px]">My journey into web development began with a simple HTML page I created for a school project. 
             Since then, I have been fascinated by the power of the web and how it can connect
             people and ideas across the globe.
             That curiosity has grown into a passion for creating beautiful, functional digital experiences that solve real problems.
             What began as late-night coding sessions in my dorm room has evolved into a career where I get to work with amazing teams and clients,
             bringing ideas to life through code.
           </p>
         </div>
         <div className="p-5 m-5 bg-white shadow-xl rounded-lg mt-6 sm: m-0 w-full max-w-sm md:mb-0 w-[100%]">
           <h2 className="text-xl p-6 text-purple-500">When I'm Not Coding</h2>
           <p>I enjoy cooking, styling hair, singing, dancing, swimming and exploring new technologies. I believe that taking breaks and engaging in different activities helps fuel my creativity and keeps me inspired.</p>
         </div>
      </div>
        <div className="flex justify-end sm: justify-center">
          <Button 
           btnText ={"View My Skills"}
           to={"/skills"} 
           className="mt-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
          </Button>
       </div>
       </div>


       <div className="flex items-between justify-center p-6 gap-6 sm:flex flex-col md:flex lg:flex-row">
       <div className=" p-6 bg-gray-200 rounded-lg shadow-lg  lg:w-[40%]">
       <div className="flex items-center justify-between sm:flex flex-col md:flex lg:flex-row">
         <h2 className="text-2xl mt-10 text-purple-500 px-4 ">Junior Developer</h2>
         <p className="bg-slate-400 w-20 text-center rounded-lg">2025</p>
        </div>
          <p className="p-4">Zulfah</p>
      
          <p className="text-lg">I started my career as a junior developer, where I learned the fundamentals of web development and gained hands-on experience in building real-world applications.
            During this time, I worked on various projects, collaborating with designers and backend developers to create seamless user experiences.
            I also had the opportunity to contribute to open-source projects, which helped me improve my coding skills and understand best practices in software development.
          </p>
       </div>

       <div className="p-6 bg-gray-200 rounded-lg shadow-lg lg:w-[40%]">
       <div className="flex items-center justify-between sm:flex flex-col">
         <h2 className="text-2xl mt-10 text-purple-500 px-4 ">Frontend Developer</h2>
         <p className="bg-slate-400 w-20 text-center rounded-lg">2025</p>
        </div>
         <p className="p-4">Zulfah</p>
      
         <p className="text-lg">I started my career as a junior developer, where I learned the fundamentals of web development and gained hands-on experience in building real-world applications.</p>
         <p className="text-lg">During this time, I worked on various projects, collaborating with designers and backend developers to create seamless user experiences.</p>
       </div>
       </div>

         <h2 className="text-purple-500 text-2xl p-6 text-center font-bold">My Values</h2>
       <div className="sm: flex gap-6 justify-center md:flex flex-col lg:flex-row lg:m-10">
        <div className="flex flex-col justify-center items-center p-4 m-4 bg-slate-100 rounded-lg shadow-lg lg:w-[30%]">
          <img src={quality} alt="quality" className=" w-10 h-10 rounded-full" />
          <h3 className="p-4 text-center">Quality First</h3>
          <p className="p-4 text-center">I believe in delivering high-quality work that meets the needs of users and clients. Quality is at the core of everything I do.</p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 m-4 bg-slate-100  rounded-lg shadow-lg lg:w-[30%]">
          <img src={collaborate} alt="collaborate" className=" w-10 h-10 rounded-full" />
          <h3 className="p-4 text-center">Collaboration</h3>
          <p className="p-4 text-center">Great products are built by great teams working together towards a common goal.</p>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center p-4 m-4 bg-slate-100  rounded-lg shadow-lg lg:w-[60%] h-[90%]">
            <img src={learning} alt="learning" className=" w-10 h-10 rounded-full" />
            <h3 className="p-4 text-center">Continious Learning</h3>
            <p className="p-4 text-center">Great products are built by great teams working together towards a common goal.</p>
         </div>
        </div>
      </div>
   </Layout>
  );
}

export default About