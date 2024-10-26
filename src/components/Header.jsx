import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <div className='bg-white p-1 mt-1 p-2 flex item-center justify-between'>
            <Link to="/" className='bg-gray-300 border rounded p-2'>Home</Link>
            <Link to="/" >
                
            </Link>
        </div>
    )
}