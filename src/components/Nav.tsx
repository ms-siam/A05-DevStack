import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className='grid grid-cols-3 container mx-auto mt-4'>
            <nav>
                <img src={logo} alt="" />
            </nav>
            <ul className='flex justify-between items-center gap-4'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='flex justify-end items-center'>
                <button className='btn'>Sign In</button>
                <button className="btn btn-secondary">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;