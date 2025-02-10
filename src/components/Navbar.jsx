import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-24 p-4">
        <h1 className='flex items-center justify-center gap-3 text-white text-2xl font-semibold'>
            <img src={logo} alt="logo" className="w-8 h-8" />
            Raycast
        </h1>

        <ul className='flex gap-6 text-[#ffffff99]'>
            <li className='cursor-pointer hover:text-white'>Store</li>
            <li className='cursor-pointer  hover:text-white'>Developer</li>
            <li className='cursor-pointer  hover:text-white'>Teams</li>
            <li className='cursor-pointer  hover:text-white'>AI <span className='text-xs text-[#2BAFFF] border rounded-lg border-[linear-gradient(45deg, blue, red)]'>Beta</span></li>
            <li className='cursor-pointer  hover:text-white'>Changelog</li>
            <li className='cursor-pointer  hover:text-white'>Pricing</li>
            <li className='cursor-pointer  hover:text-white'>Blog</li>
        </ul>

        <ul className='flex items-center gap-6 text-[#ffffff99]'>
            <li className='cursor-pointer  hover:text-white'>Log in</li>
            <li className='p-2 rounded-sm bg-[rgba(255,255,255,0.15)] cursor-pointer  hover:text-white'>Download</li>
        </ul>
    </nav>
  )
}

export default Navbar