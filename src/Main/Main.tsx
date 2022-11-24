import React, { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
import {
  StyledHero,
  StyledMain,
  StyledMainHeader,
  ReviewContainer,
  MainContainer,
  MainButtonWrapper,
  SurpriseButton,
} from './StyledMain';
import reviewsData from '../data';

interface Review {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
}

export default function Main() {
  const [reviews, setReviews] = useState<[] | Review[]>([]);
  const [selectedReviewId, setSelectedReviewId] = useState(1);
  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  const handleNextReview = () => {
    if (selectedReviewId === reviews.length) {
      setSelectedReviewId(1);
    } else {
      setSelectedReviewId(selectedReviewId + 1);
    }
  };
  const handlePreviousReview = () => {
    if (selectedReviewId === 1) {
      setSelectedReviewId(reviews.length);
    } else {
      setSelectedReviewId(selectedReviewId - 1);
    }
  };
  const handleRandomReview = () => {
    const randomReviewId = Math.floor(Math.random() * reviews.length) + 1;
    setSelectedReviewId(randomReviewId);
  };
  return (
    <StyledMain>
      <MainContainer>
        <StyledMainHeader>
          <StyledHero>Our Reviews</StyledHero>
          <div className="underline"></div>
        </StyledMainHeader>
        {reviews
          .filter((review: Review) => review.id === selectedReviewId)
          .map((review: Review) => (
            <ReviewContainer key={review.id}>
              <div className="main__img-container">
                <img src={review.image} alt={review.name} />
                <span className="main__quote-icon">
                  <FaQuoteRight color="white" />
                </span>
              </div>
              <h4 className="main__review-name">{review.name}</h4>{' '}
              <p className="main__review-title">{review.job}</p>{' '}
              <p className="main__review-description">{review.text}</p>
              <MainButtonWrapper>
                <button onClick={handlePreviousReview}>
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <button onClick={handleNextReview}>
                  <MdOutlineKeyboardArrowRight />
                </button>
              </MainButtonWrapper>
              <SurpriseButton onClick={handleRandomReview}>
                Surprise Me
              </SurpriseButton>
            </ReviewContainer>
          ))}
      </MainContainer>
    </StyledMain>
  );
}
