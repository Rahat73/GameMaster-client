import React from 'react';
import { toast } from 'react-toastify';

const AddService = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const service = {
            title: form.title.value,
            img: form.img.value,
            price: form.price.value,
            rating: form.rating.value,
            description: form.description.value,
            users: form.users.value
        }

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Service added successfully.');
                    form.reset();
                }
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Service!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Title</span>
                                            </label>
                                            <input name='title' type="text" placeholder="Title" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">ImageURL</span>
                                            </label>
                                            <input name='img' type="text" placeholder="ImageURL" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input name='price' type="text" placeholder="Price" className="input input-bordered" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Rating</span>
                                            </label>
                                            <input name='rating' type="number" placeholder="Rating" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Description</span>
                                            </label>
                                            <input name='description' type="text" placeholder="Description" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Users</span>
                                            </label>
                                            <input name='users' type="number" placeholder="Users" className="input input-bordered" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary capitalize text-xl">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;