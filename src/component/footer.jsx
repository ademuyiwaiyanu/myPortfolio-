const Footer = () =>{
    return(
        <>
            <footer className="bg-gray-200 hover:bg-purple-300 text-center py-6 mt-10 border-t text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Ademuyiwa Iyanu Tinuade. All rights reserved.</p>
      <p>
        Contact: <a href="mailto:adeiyanu121@gmail.com" className="text-blue-500">adeiyanu121@gmail.com</a>
      </p>
    </footer>

        </>
    )
}

export default Footer