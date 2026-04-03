import React from 'react';
import Layout from "../../component/layout";
import pet from "../../assets/img/pet.jpeg";
import steriscollection from "../../assets/img/steriscollection.png";
import tinusapparel from "../../assets/img/tinusapparel.png";
import graphicswebsite from "../../assets/img/graphicswebsite.png";
import Button from "../../component/Button";
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <Layout>
    <div className=" p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-purple-500 text-center">My Projects</h2>
      <p className="text-lg mb-6 text-center">Here are some of the projects I've worked on:</p>
        <h1 className='text-purple-500 font-bold p-4 text-2xl'>Fearured Project</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div> 
              <div className="flex flex-col items-center mb-6 p-4 bg-pink-300 rounded-lg shadow-md">
                <img src={steriscollection} alt="steriscollection" width={400} height={400} className="rounded-lg mb-2 pt-200 mt-200" />
                <h2 className="text-2xl font-bold mb-2 text-purple-500">Clothing Store</h2>
                <p className="text-gray-700 mb-4">An e-commerce website for a clothing store built with React and Node.js.</p>
                <p className="text-lg mb-4">This project demonstrates my ability to create a full-stack application with a user-friendly interface and secure backend.</p>
                <p className="text-lg">I developed this project to gain experience in building scalable web applications and to showcase my skills in frontend development.</p>
                <p><a href="https://steriscollection1.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-blue-500 text-lg m-6 hover:text-blue-900  '>Open site</a></p>
              </div>
            <div className="flex flex-col items-center mb-6 p-4 bg-yellow-300 rounded-lg shadow-md">
              <img src={tinusapparel} alt="Tinus Apparel" width={400} height={400} className="rounded-lg mb-2 pt-200 mt-200" />
              <h2 className="text-2xl font-bold mb-2 text-purple-500">Tinus Apparel</h2>
              <p className="text-gray-700 mb-4">A clothing brand website built with React and Node.js.</p>
              <p className="text-lg mb-4">This project showcases my skills in full-stack development and e-commerce solutions.</p>
              <p className="text-lg">I created this website to promote the brand and provide a seamless shopping experience.</p>
              <p><a href="https://tinusapparel.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-blue-500 text-lg m-6 hover:text-blue-900  '>Open site</a></p>
            </div>
              <div className="flex flex-col items-center mb-6 p-4 bg-blue-300 rounded-lg shadow-md">
                <img src={graphicswebsite} alt="graphicswebsite" width={400} height={400} className="rounded-lg mb-2 pt-200 mt-200" />
                <h2 className="text-2xl font-bold mb-2 text-purple-500">Graphics Portfolio</h2>
                <p className="text-gray-700 mb-4">A portfolio website showcasing my graphic design work, built with HTML, CSS, and JavaScript.</p>
                <p className="text-lg mb-4">This project highlights my skills in web design and development, as well as my ability to create visually appealing and responsive websites.</p>
                <p className="text-lg">I created this portfolio to share my graphic design work and to demonstrate my proficiency in frontend development.</p>
                <p><a href="https://graphicswebsite.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-purple-500 text-2xl m-6 hover:text-blue-900  '>Open site</a></p>
              </div>
                <div className="flex flex-col items-center p-4 bg-pink-300 rounded-lg shadow-md">
                  <img src={pet} alt="Pet Project" className="rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-500">Pet Adoption App</h3>
                <p className="text-gray-700">A web application to help users find and adopt pets.</p>
                <p className="text-lg">This project showcases my skills in React, CSS, and API integration.</p>
                <p className="text-lg">I built this application to help connect pets with loving homes.</p>
                </div>
            </div>
        </div>
    </div>
        <div className=" p-6 bg-gray-300 text-center mt-6 rounded-lg shadow-lg">
            <h3 className='text-purple-500 text-2xl'>Have a project in Mind?</h3>
            <p className='text-lg'>I'm always excited to work on new challenges and collaborate with amazing people. Let's discuss how we can bring your ideas to life.</p>
            <Button to="/contact" 
            className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full"
            btnText={"Start a Project"}
            >

            </Button>
        </div>

    </Layout>
  );
}

export default Project;