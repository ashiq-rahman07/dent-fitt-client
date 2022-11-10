import React from 'react';
import useTitle from '../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='w-10/12 mx-auto mt-10'>
            <h2 className='w-1/5 bg-purple-800  text-center mx-auto text-white font-semibold text-2xl mb-3'>Our blog</h2>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className='bg-slate-300 p-5 rounded-lg shadow-xl'>
                    <h2 className='bg-indigo-600 w-3/5 mx-auto mb-2 px-2 text-center font-semibold text-gray-900 shadow-md'>What is difference between sql and nosql ?</h2>
                    <p>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
                <div className='bg-slate-300 p-5 rounded-lg shadow-xl'>
                    <h2 className='bg-indigo-600 w-3/5 mx-auto mb-2 px-2 text-center font-semibold text-gray-900 shadow-md'>what isJWT and how does it work?</h2>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </div>
                <div className='bg-slate-300 p-5 rounded-lg shadow-xl'>
                    <h2 className='bg-indigo-600 w-3/5 mx-auto mb-2 px-2 text-center font-semibold text-gray-900 shadow-md'>What is the difference between javascript and node.js ?</h2>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language..</p>
                </div>
                <div className='bg-slate-300 p-5 rounded-lg shadow-xl'>
                    <h2 className='bg-indigo-600 w-3/5 mx-auto mb-2 px-2 text-center font-semibold text-gray-900 shadow-md'>How does nodejs handle multiple request at the same time ?</h2>
                    <p> NodeJS receives multiple client requests and places them into EventQueue.NodeJS is built with the concept of event-driven architecture.NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them..</p>
                </div>
           </div>
        </div>
    );
};

export default Blog;