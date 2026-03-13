import Layout from "../../component/layout"
import Form from "../../component/form";
import React from 'react';

const Contact = () =>{
    return(
        <>
         <Layout>
           <div className="flex flex-col justify-center items-center mb-6 text-3xl sm: p-5">
            <h1 className="mb-6 text-purple-500 text-3xl">Let's Work Together</h1>
            <p>Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.</p>
           </div>
              <div className="flex flex-col p-6 rounded-md bg-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-purple-500">Get In Touch</h2>
                <p className="text-lg mb-6">Feel free to reach out via email or connect with me on social media.</p>
                <div className="space-y-4">
                    <p className="text-lg">Email: <a href="mailto:adeiyanu121@gmail.com" className="text-blue-500">adeiyanu121@gmail.com</a> </p>
                    <p className="text-lg">Phone: +234 810 293 6321</p>
                    <p className="text-lg">LinkedIn: <a href="https://www.linkedin.com/in/ademuyiwa-iyanu-tinuade/"
                     className="text-blue-500 hover:underline">Ademuyiwa Iyanu Tinuade</a></p>
                    <p className="text-lg">GitHub: <a href="https:www.github.com/ademuyiwaiyanu/" className="text-blue-500 hover:underline">ademuyiwaiyanu</a></p>
                    <p className="text-lg">Location: Lagos Nigeria</p>
                 </div>
                 </div>
                <div className="mt-1">
                <Form />
                </div>

        </Layout>
        </>
    )
}

export default Contact