import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './Review';
import AvgRating from './AvgRating';
import api from '../../lib/api';
import AddReview from './AddReview';
import SortSelector from './SortSelect';
import Stars, { avgStars } from '../RelatedItems/Stars';

const ReviewList = ({ id, metaReview }) => {
  // Hooks state goes here map over the list and render pass down into the review
  const count = 2;
  const [reviews, setReview] = useState([]);
  const [moreReviews, setMoreReviews] = useState(count);
  const [sort, setSort] = useState('Relevant');

  const page = 1;
  useEffect(() => {
    api.listReviews(id, sort, page, moreReviews)
      .then((product) => {
        console.log('list Reviews', product);
        setReview(product);
      })
      .catch((err) => console.log(err));
  }, [id, sort, page, moreReviews]);
  return (
    <div id="reviews">
      <p> Reviews go here: </p>
      <p>
        Sorted by
        {' '}
        <select onChange={() => setSort()}>
          <option value="Relevant">Relevant</option>
          <option value="Newest">Newest</option>
          <option value="Helpful">Helpful</option>
        </select>
      </p>

      {reviews.map((item) => (
        <Review
          id={item.review_id}
          res={item.response}
          rec={item.recommend}
          pics={item.photos}
          key={item.review_id+2}
          summary={item.summary}
          body={item.body}
          date={item.date}
          name={item.reviewer_name}
          helpful={item.helpfulness}
          rating={item.rating}
        />
      ))}
      {/* <AvgRating
        key={metaReview.product_id : null }
        rating={avgStars(metaReview.ratings) : null}// object
        fit={metaReview.characteristics && metaReview.characteristics.Fit ? metaReview : null} // for fit characteristics
        comfort={metaReview.characteristics && metaReview.characteristics.Comfort ? metaReview : null} // for comfort
        length={metaReview.characteristics && metaReview.characteristics.Length ? `Length: ${metaReview.characteristics.Length.value}` : null}
        quality={metaReview.characteristics && metaReview.characteristics.Quality ? `Quality: ${metaReview.characteristics.Quality.value}` : null}
        rec={metaReview.recommended === undefined ? 'empty' : metaReview.recommended.true > metaReview.recommended.false}
      /> */}
      {/* <AddReview /> */}
      <button type="button" onClick={() => setMoreReviews(moreReviews + 2)}>MORE REVIEWS</button>
    </div>
  );
};
ReviewList.propTypes = {
  id: PropTypes.number.isRequired,
};
export default ReviewList;
