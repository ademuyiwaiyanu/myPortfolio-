import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../component/layout';
import contact from '../../assets/img/contact.png';
import Button from '../../component/Button';
import book from '../../assets/img/openBook.jpeg';
import skills from '../../assets/img/skill.jpg';
import project from '../../assets/img/project.png';
import image from '../../assets/img/mypics.jpg';
// import { FaArrowRightLong } from "react-icons/fa6";
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}


const Home =()=>{
    return (
        <Layout>
        <div className="flex flex-col items-center p-6 bg-gray-100 sm:h-[100%] ">
              <img src={image} alt="Ademuyiwa Iyanu Tinuade" className="rounded-full w-32 h-32 mb-6" /> 
            <h2 className="text-3xl font-bold mb-4 text-purple-500">Hi, I'm Ademuyiwa Iyanu Tinuade</h2>
            <p className="text-lg">Frontend Developer passionate about building responsive web apps with clean code and great user experience.</p>
            <p>I create beautiful, functional websites and applications that solve real problems.I turn ideas into digital experiences that users love.</p>
            <p className="text-lg mt-4">Let's connect and build something amazing together!</p>
            <div>
                {/* <p><i class="fa fa-github-square" aria-hidden="true"></i></p>
                 <p><i class="fa fa-linkedin-square" aria-hidden="true"></i></p> */}
            </div>
            <div className="mt-6 p-10">
                <div className='mt-6 flex space-x-4'>
                 <Button btnText={'view my work'}
                 hasIcons={true}
                    to={'/project'}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                    onClick={() => console.log('View Projects Clicked')}

                 /> 
                    <Button btnText={'Download CV'}
                    to={'/resume'}
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                    onClick={() => console.log('Download CV Clicked')}
                    >
                    </Button>
                   {/* <Button className="ml-4">Contact Me</Button> */}
                 </div>
             </div>
                 <div className='mt-10 flex space-x-10 py-4'>
                <div>
                 <Link to={'/About'}>
                     <img src={book} alt="Book" 
                     className="w-20 h-20 mt-6 rounded-full hover:scale-110 transition duration-300"
                      />
                      <p className='text-center'>About</p>
                 </Link>
                 </div>
                 <div>
                    <Link to={'/skills'}>
                        <img src={skills} alt="Skills" 
                        className="w-20 h-20 mt-6 rounded-full hover:scale-110 transition duration-300"
                        />
                        <p className='text-center'>Skills</p>
                    </Link>
                 </div>
                 <div>
                    <Link to={'/project'}>
                        <img src={project} alt="project" 
                        className="w-20 h-20 mt-6 rounded-full hover:scale-110 transition duration-300"
                        />
                        <p className='text-center'>Projects</p>
                    </Link>
                 </div>
                 <div>
                    <Link to={'/contact'}>
                        <img src={contact} alt="Contact" 
                        className="w-20 h-20 mt-6 rounded-full hover:scale-110 transition duration-300"
                        />
                        <p className='text-center'>Contact</p>
                    </Link>
                 </div>
                 </div>
           </div>
        </Layout>
    );
}
export default Home;