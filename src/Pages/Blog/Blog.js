import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='w-10/12 mx-auto mb-16'>
            <div className="carousel w-full space-x-10">
                <div id="item1" className="flex flex-col carousel-item w-4/5 rounded-box bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm p-10">
                    <h1 className='mb-4 text-2xl font-semibold'>What is <code>cors</code> ?</h1>
                    <p>CORS, also known as Cross-Origin Resource Sharing, allows resources such as JavaScript and web fonts to be loaded from domains other than the origin parent domain. These days, a web page commonly loads images, style sheets, scripts, etc. from other domains. Although, a few years ago due to security reasons, web fonts and AJAX (XML Http Requests) were normally restricted to the same-origin policy which restricted their use between domains. Now however, with the use of CORS, the browser and server can communicate to determine whether it is safe to allow a cross-origin request.</p>
                </div>
                <div id="item2" className="flex flex-col carousel-item w-4/5 rounded-box bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm p-10">
                    <h1 className='mb-4 text-2xl font-semibold'>Why are you using <code>firebase</code> ? What other options do you have to implement authentication??</h1>
                    <p className='text-start font-semibold text-lg'>Fast and secured web hosting.</p>
                    <p>Firebase provides fast, easy, and secure web hosting. The hosting features can further be paired with cloud functions to build and manage microservers on Firebase. With Firebase Hosting, you can send any web applications, static and dynamic content to the CDN with a single command.</p>
                    <p className='text-start font-semibold text-lg'>Firebase has integrated authentication features</p>
                    <p>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.</p>
                    <p className='text-start'><span className='font-semibold text-lg'>Firebase alternatives: </span> Auth0, MongoDB, Okta, Keycloak, Passport</p>
                </div>
                <div id="item3" className="flex flex-col carousel-item w-4/5 rounded-box bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm p-10">
                    <h1 className='mb-4 text-2xl font-semibold'>How does the private route work?</h1>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
                <div id="item4" className="flex flex-col carousel-item w-4/5 rounded-box bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm p-10">
                    <h1 className='mb-4 text-2xl font-semibold'>What is Node? How does Node work?</h1>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    <p className='mt-3'><span className='text-lg font-semibold text-start'>Working of Node.js</span>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div >
    );
};

export default Blog;