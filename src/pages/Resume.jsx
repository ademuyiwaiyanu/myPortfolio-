import Layout from "../component/layout";

const Resume = ()=> {
    return (
        <Layout>
                    <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-purple-300 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Resume</h2>
                <p className="text-gray-700 mb-4">Download my resume to learn more about my skills and experience.</p>
                <a href="/path/to/resume.pdf" download className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Download Resume</a>
            </div>
        </div>
        </Layout>
    );
}

export default Resume;