import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const [error,setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const handleSubmit= event =>{
        
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);


        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
        })
            .catch(e => {
                console.error(e);
                setError(e.message);
                
            });
    }
    return (
        <div className=" w-2/5 mt-20 mx-auto bg-slate-700  p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form onSubmit={handleSubmit}    className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-lg">
                    <label htmlFor="name"  className="block dark:text-gray-400">Name</label>
                    <input type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                </div>
                <div className="space-y-1 text-lg">
                    <label htmlFor="photoURL" className="block dark:text-gray-400">photoURL</label>
                    <input type="text" name="photoURL" id="photoURL" placeholder="photoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                </div>
                <div className="space-y-1 text-lg">
                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                </div>
                <div className="space-y-1 text-lg">
                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                   
                </div>
                <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign Up</button>
            </form>
          
            <p className="text-lg text-center sm:px-6 dark:text-gray-400">All ready have an account?
                <Link to='/login' className='hover:text-orange-700 font-medium'>Sign in</Link>
            </p>
        </div>
    );
};

export default Register;