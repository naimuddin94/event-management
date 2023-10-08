import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-4xl font-black text-center pt-8 bg-gradient-to-t from-[#1D267D] to-[#321E1E] bg-clip-text text-transparent">
          Our client reviews
        </h1>
      </div>
      <Marquee>
        {reviews?.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Marquee>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Reviews;
