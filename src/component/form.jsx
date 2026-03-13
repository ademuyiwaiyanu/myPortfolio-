import React from 'react'
import Button from './Button';
const Form = () =>{
    return(
        <>
            <form className="bg-gray-400 shadow-md rounded-lg p-10  w-2/4 mx-auto sm: m-8 sm: w-[50%]">
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <Button 
                    className="bg-purple-500 hover:bg-purple-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
                    btnText="Send Message"
                    onClick={() => console.log('Message Sent')}
                    >
                    </Button>
                </div>
            </form>
            
        </>
    )
}
export default Form