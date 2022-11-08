import React from 'react';

const Blog = () => {
    return (
       <div className='mb-5'>
        <div className='mt-2'>
            <h1 className='text-lg font-bold'>Difference between SQL and NoSQL?</h1>
            <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
        </div>
        <div className='mt-2'>
            <h1 className='text-lg font-bold'>what is jwt and how does it work?</h1>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
        </div>
        <div className='mt-2'>
           <h1 className='text-lg font-bold'> What is the difference between javascript and NodeJS?</h1>
           <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
        </div>
        <div className='mt-2'>
            <h1 className='text-lg font-bold'>How does NodeJS handle multiple requests at the same time?</h1>
            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
       </div>
    );
};

export default Blog;