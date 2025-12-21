import { Download ,Star} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const AppCard = ({app}) => {

    const {image, title, ratingAvg, downloads,id} = app;

    return (
        <Link to={`/app/${id}`} className='p-2 bg-white max-w-[250px] transform transition duration-250 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl rounded-md'>
            <figure>
                <img className='rounded-md' src={image} alt="" />
            </figure>
            <div className=''>
                <h2 className='w-full font-bold'>{title}</h2>
                <div className='flex justify-between font-semibold'>   
                    <p className='flex text-[#00D390] bg-[#F1F5E8] px-2 py-1 rounded-md'><Download width={15} /> {downloads}</p>
                    <p className='flex text-[#FF8811] bg-[#FFF0E1] px-2 py-1 rounded-md'><Star width={15} />{ratingAvg}</p>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;