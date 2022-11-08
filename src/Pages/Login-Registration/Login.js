import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { setLoading, signIn, googleSignInProvider } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log('email/pass', user)
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(e => {
                toast.error(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignInProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log('google', user);
                navigate(from, { replace: true });
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
                    <div className="divider text-2xl">Login</div>
                    <div className='form-control w-3/4 lg:w-1/2 mx-auto'>
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter your password" className="input input-bordered w-full max-w-xs" required />
                        <div>
                            <button className='btn btn-wide btn-outline btn-secondary border border-slate-400 mt-10 mb-5 capitalize' type='submit'><p className='text-white font-semibold text-lg'>Login</p></button>
                        </div>
                        <div className='my-3'>
                            <p>Don't have an Account? <Link className='text-lg text-lime-500' to='/registration'>Register</Link></p>
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

export default Login;