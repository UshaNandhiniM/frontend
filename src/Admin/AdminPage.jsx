import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const AdminPage = () => {
    return (
        <div>
            <Navbar/>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col w-full max-w-md p-5 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold">Welcome,Admin page</h1>
        <br/>
            <div className="flex items-center justify-between mb-4">
            <img className="h-15 w-15" src="https://tse1.mm.bing.net/th?id=OIP.q05IyZKWrPVJ8Djk0BX4rQHaF7&pid=Api&P=0&h=180" alt="Logo" />
                <Link to="/user">
                <Button size="sm" className='btn btn-sm btn-warning me-3' >
                      Products
                    </Button>
                </Link>
                    
            </div>
            <div className="flex items-center justify-between mb-4">
            <img className="h-15 w-15" src="https://tse4.mm.bing.net/th?id=OIP.KQ4YlpyVkbeS34BoCQVZWQHaHa&pid=Api&P=0&h=180" alt="Logo" />
                <Link to="/adminorder">
                    <Button size="sm" className='btn btn-sm btn-warning me-3'>
                        Order
                    </Button>
                </Link>
               
                </div>
                </div>
                </div>
                </div>
    );
};

export default AdminPage;