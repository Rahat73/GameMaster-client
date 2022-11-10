import { HiStar } from "react-icons/hi";

const MyReviewsCard = ({ myReview, handleUpdateId, handleDelete }) => {

    const { _id, serviceName, serviceImg, reviewDesc, reviewRate } = myReview;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={serviceImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p className='text-start'>{reviewDesc}</p>
                    <div className='flex items-center text-xl'><HiStar></HiStar>{reviewRate}</div>
                    <div className="card-actions justify-end">
                        <label onClick={() => handleUpdateId(_id)} htmlFor="my-drawer-4" className="btn btn-primary capitalize">Update</label>
                        <button onClick={() => handleDelete(_id)} className="btn btn-error capitalize">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;