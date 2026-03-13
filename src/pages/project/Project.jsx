import React from 'react';
import Layout from "../../component/layout";
import pet from "../../assets/img/pet.jpeg";
import Button from "../../component/button";

const Project = () => {
  return (
    <Layout>
    <div className=" p-6 h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-purple-500 text-center">My Projects</h2>
      <p className="text-lg mb-6 text-center">Here are some of the projects I've worked on:</p>
        <h1 className='text-purple-500 font-bold p-4 text-2xl'>Fearured Project</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div>
                <img src={pet} alt="Pet Project" className="rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-500">Pet Adoption App</h3>
                <p className="text-gray-700">A web application to help users find and adopt pets.</p>
                <p className="text-lg">This project showcases my skills in React, CSS, and API integration.</p>
                <p className="text-lg">I built this application to help connect pets with loving homes.</p>
            </div>
        </div>
    </div>
        <div className="flex flex-col justify-center items-center mt-10 bg-purple-100 p-6 rounded-lg shadow-lg">
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