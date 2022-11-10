import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hook/useTitle';
// import { AuthContext } from '../../Contexts/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {

    useTitle('My Reviews');
    const myReviews = useLoaderData();
    const [displayReviews, setDisplayReviews] = useState(myReviews);

    const [updateReviewID, setupdateReviewID] = useState('');

    //loading data for drawer
    const [selectedReview, setSelectedReview] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/updateReview/${updateReviewID}`)
            .then(res => res.json())
            .then(data => setSelectedReview(data))
    }, [updateReviewID])

    //getting the id of selected review
    const handleUpdateId = _id => {
        setupdateReviewID(_id)
    }

    // const [successfulUpdate, setSuccessfullUpdate] = useState(false);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/myReviews/${selectedReview?.userID}`)
    //         .then(res => res.json())
    //         .then(data => setSelectedReview(data))
    // }, [updateReviewID])

    const handleDelete = _id => {
        const agree = window.confirm('Are you sure to DELETE the review?')
        if (agree) {
            fetch(`http://localhost:5000/myReviews/${_id}`, {
                method: `DELETE`
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Review deleted successfully');
                        const remainingReviews = displayReviews.filter(review => review._id !== _id);
                        setDisplayReviews(remainingReviews);
                    }
                });
        }
    }

    const handleUpdate = (event) => {
        // event.preventDefault();
        const form = event.target;
        const reviewDescValue = form.updatedReviewDesc.value;

        let reviewRateValue;
        if (form.rating2.value === "") {
            reviewRateValue = "5";
        }
        else {
            reviewRateValue = form.rating2.value;
        }

        const updatedReview = {
            serviceID: selectedReview?.serviceID,
            serviceName: selectedReview?.serviceName,
            serviceImg: selectedReview?.serviceImg,
            userID: selectedReview?.userID,
            userName: selectedReview?.userName,
            userImg: selectedReview?.userImg,
            reviewDesc: reviewDescValue,
            reviewRate: reviewRateValue
        }

        fetch(`http://localhost:5000/updateReview/${updateReviewID}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review updated');
                    // form.reset();
                }
            })
    }

    return (
        <div className='my-10 min-h-screen'>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {
                        myReviews.length ?
                            <>
                                <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                    {
                                        displayReviews.map(myReview => <MyReviewsCard
                                            key={myReview._id}
                                            handleUpdateId={handleUpdateId}
                                            handleDelete={handleDelete}
                                            myReview={myReview}
                                        >
                                        </MyReviewsCard>)
                                    }
                                </div>
                            </>
                            :
                            <>
                                <div className='text-8xl mt-32'>No reviews were added</div>
                            </>
                    }
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <h1 className='text-2xl my-5'>{selectedReview?.serviceName}</h1>
                        <label htmlFor="Your-Review" className='text-start mt-3'>Your review</label>
                        <textarea htmlFor="Your-Review" className="textarea textarea-error mb-3" defaultValue={selectedReview?.reviewDesc} disabled></textarea>
                        <p>Rating: {selectedReview?.reviewRate}</p>
                        <form onSubmit={handleUpdate}>
                            <div className="form-control my-5">
                                <label className='text-start mt-3'>Edit review</label>
                                <textarea required name='updatedReviewDesc' className="textarea textarea-error" defaultValue={selectedReview?.reviewDesc} placeholder="Edit your review"></textarea>
                                <div className="rating mt-5 mx-auto">
                                    <input type="radio" value='1' name="rating2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" value='2' name="rating2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" value='3' name="rating2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" value='4' name="rating2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" value='5' name="rating2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <div>
                                    <button className='btn btn-outline btn-secondary border border-slate-400 mt-10 mb-5 capitalize' htmlFor="my-drawer-4" type='submit'><p className='text-white'>Update Review</p></button>
                                </div>
                            </div>
                        </form>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;