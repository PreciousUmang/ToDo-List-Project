function Header() {
    return (
        <nav className="flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 shadow-purple-500 shadow-lg p-2">
            {/* Name Logo */}
            <img src="src/assets/logo.png" className="fa-wiggle h-12 rounded-lg shadow-md shadow-gray-800 ml-0 md:ml-8 lg:ml-16" alt="Logo" />
            
            {/* GithubLink */}
            <a
                href="https://www.github.com/preciousumang"
                className="text-white mr-0 md:mr-8 lg:mr-16 w-auto bg-blue-500 hover:bg-blue-600 px-4 py-2 font-semibold rounded-lg transition duration-200 ease-in-out"
                target="_blank"
            >
                Developer's Github <i className="fa-brands fa-github fa-xl fa-beat"></i>
            </a>
        </nav>

    )
}

export default Header