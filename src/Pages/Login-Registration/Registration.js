import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hook/useTitle';

const Registration = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useTitle('Registration');
    const { createUser, updateUserProfile, googleSignInProvider } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const [accepted, setAccepted] = useState(false);

    const handleTnC = event => {
        setAccepted(event.target.checked);
        console.log(event.target.checked);
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => {
                toast.error(e.message);
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.userName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log('result.user', user);
                    form.reset();
                    handleUpdateUserProfile(name, photoURL);
                    toast.success('Account Created Successfully');
                })
                .catch(e => {
                    toast.error(e.message);
                });
        }
        else {
            toast.error("Confirm Password doesn't match")
        }
    }



    const handleGoogleSignIn = () => {
        googleSignInProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log('result.user', user);
            })
            .catch(e => {
                toast.error(e.message);
            });
    }

    return (
        <div className='w-11/12 md:w-8/12 lg:w-5/12 mx-auto my-10'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <form onSubmit={handleSubmit}>
                <div className='bg-slate-300 bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-2xl p-10'>
                    <div className="divider text-2xl">Registraition</div>
                    <div className='form-control w-3/4 lg:w-1/2 mx-auto'>
                        <label className="label">
                            <span className="label-text text-lg text-start">Name</span>
                        </label>
                        <input type="text" name='userName' placeholder="Enter your name" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text text-lg text-start">Photo URL</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="Enter photo URL" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text text-lg">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter your password" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text text-lg">Confirm password</span>
                        </label>
                        <input type="password" name='confirmPassword' placeholder="Confirm your password" className="input input-bordered w-full max-w-xs" required />
                        <div className="form-control mt-3">
                            <label className="cursor-pointer label justify-start">
                                <input onClick={handleTnC} type="checkbox" className="checkbox checkbox-accent mr-2" />
                                <span className="label-text">Accept <Link className='text-amber-400' to="/T&C">Terms & Conditions</Link></span>
                            </label>
                        </div>
                        <div>
                            <button className='btn btn-wide btn-outline btn-secondary border border-slate-400 mt-10 mb-5' type='submit' disabled={!accepted}><p className='text-white font-semibold text-lg'>Registration</p></button>
                        </div>
                        <div className='my-3'>
                            <p>Already have an Account? <Link className='text-lg text-lime-500' to='/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </form>
            <div className="divider text-lg">OR</div>
            <div className='flex justify-evenly'>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary border border-slate-400'><FaGoogle className='mr-2 text-lg text-white'></FaGoogle> <p className=' text-white capitalize text-lg font-semibold'>SignIn with Google</p></button>
            </div>
        </div>
    );
};

export default Registration;