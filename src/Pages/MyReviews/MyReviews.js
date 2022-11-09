import { useLoaderData } from 'react-router-dom';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {

    const myReviews = useLoaderData();

    return (
        <div className='my-10 min-h-screen'>
            {
                myReviews.length ?
                    <>
                        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {
                                myReviews.map(myReview => <MyReviewsCard
                                    key={myReview._id}
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
    );
};

export default MyReviews;