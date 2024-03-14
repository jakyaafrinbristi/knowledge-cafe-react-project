import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 max-w-7xl mx-auto lg:px-8 py-5'>
             <h1 className='text-4xl font-bold'>knowledge cafeee</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;