
import img from '../../../assets/images/Logo.png';

const Logo = () => {
    return (
        <div>
            <img src={img} className='w-28 md:w-44 lg:w-52'></img>
        </div>
    );
};

export default Logo;