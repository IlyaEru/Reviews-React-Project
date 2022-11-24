import {
  StyledButton,
  StyledContainer,
  StyledMainHeading,
  StyledSection,
} from '../globalStyles';
import styled from 'styled-components';

export const StyledMain = styled(StyledContainer).attrs({
  as: 'main',
})`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

export const MainContainer = styled(StyledContainer)`
  width: 80vw;
  margin: 0;
  max-width: ${({ theme }) => theme.colors.maxWidth};
  box-sizing: content-box;
  @media (max-width: 776px) {
    box-sizing: border-box;
  }
`;
export const StyledMainHeader = styled(StyledContainer).attrs({
  as: 'header',
})`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primaryBlue};
    margin-bottom: 1.25rem;
  }
`;

export const StyledHero = styled(StyledMainHeading)`
  margin-bottom: 1rem;
  font-size: 2rem;
  letter-spacing: 0.1rem;
`;

export const ReviewContainer = styled(StyledSection).attrs({
  as: 'article',
})`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  box-shadow: ${({ theme }) => theme.colors.lightShadow};
  .main__img-container {
    position: relative;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0.5rem -0.25rem ${({ theme }) => theme.colors.primaryBlue};
    }
    .main__quote-icon {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
      width: 2.5rem;
      height: 2.5rem;
      background: ${({ theme }) => theme.colors.primaryBlue};
      border-radius: 50%;
      transform: translateY(25%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .main__review-name {
    letter-spacing: 0.1rem;
    text-transform: capitalize;
  }
  .main__review-title {
    color: ${({ theme }) => theme.colors.primaryBlue};
    text-transform: uppercase;
  }
  .main__review-description {
    text-align: center;
    color: ${({ theme }) => theme.colors.darkGrey};
    line-height: 1.5;
    @media (max-width: 776px) {
      font-size: 0.875rem;
    }
  }
`;

export const MainButtonWrapper = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0.75rem 0;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.primaryBlue};
    transition: ${({ theme }) => theme.colors.transition};
    opacity: 0.8;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryBlue};
      opacity: 1;
    }
  }
`;
export const SurpriseButton = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.primaryLightBlue};
  transition: ${({ theme }) => theme.colors.transition};
  &:hover {
    background: ${({ theme }) => theme.colors.primaryBlue};
    color: ${({ theme }) => theme.colors.black};
  }
`;
