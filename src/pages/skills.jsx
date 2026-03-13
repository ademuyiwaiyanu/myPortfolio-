import React from 'react';
import Layout from '../component/layout';
import Button from '../component/button';

const Skills =() =>{
    return(
        <>
        <Layout>
            <div className="flex flex-col justify-center items-center bg-gray-100 sm: p-5">
                <div className="">
                    <h2 className="text-3xl font-bold mb-4 text-purple-500">Skills And Expertise</h2>
                    <p className="text-gray-700 mb-4 text-xl">Technologies and tools I use to bring ideas to life</p>
            </div>

                                <div className=" bg-white p-6 rounded-lg shadow-lg mb-6 hover:scale-110 transition-transform duration-300">
                        <div className='bg-gray-700'></div>
                        <h4 className='text-purple-300 font-bold text-xl'>Frontend Development</h4>
                        <p>Creating beautiful, responsive user interfaces</p>
                    <div className='flex gap-6 flex-wrap mt-4 justify-center p-8'>
                        <p className='bg-gray-500 w-12 h-10 p-1 rounded-full text-purple-200'>React</p>
                        <p className='bg-gray-500 w-12 h-10 p-1 rounded-full text-purple-200'>HTML</p>
                        <p className='bg-gray-500 w-12 h-10 p-1 rounded-full text-purple-200'>CSS</p>
                        <p className='bg-gray-500 w-18 h-10 p-1 rounded-full text-purple-200'>JavaScript</p>
                        <p className='bg-gray-500 w-18 h-10 p-1 rounded-full text-purple-200'>Tailwind CSS</p>
                         <p className='bg-gray-500 w-18 h-10 p-1 rounded-full text-purple-200'>GITHUB</p>
                        {/* <p className='bg-gray-500 w-12 h-10 p-1 rounded-full text-purple-200'>Bootstrap</p> */}
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10 bg-purple-100 p-6 rounded-lg shadow-lg sm:flex flex-col">
            <h3 className='text-purple-500 text-2xl'>Want to learn more?</h3>
            <p className='text-lg'>I'm always eager to learn new skills and technologies. Let's connect and explore opportunities together.</p>
            <Button to="/contact" 
            className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full"
            btnText={"Get in Touch"}
            >
            </Button>   
        </div>
        <div className="flex justify-center items-center mt-10 bg-purple-100 p-6 rounded-lg shadow-lg sm:flex flex-col">
            <h3 className='text-purple-500 text-2xl'>Interested in collaborating?</h3>
            <p className='text-lg'>I love working on projects with like-minded individuals. Let's create something amazing together!</p>
            <Button to="/project" 
            className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full"
            btnText={"Start a Project"}
            >
            </Button>   
        </div>
            </div>
        

        </Layout>
        </>
    )
}

export default Skills