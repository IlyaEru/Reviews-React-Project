import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, ::after,
::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const StyledButton = styled.button`
  border-radius: 4px;
  padding: ${(props) => (props.size === 'small' ? '6px 12px' : '10px 16px')};
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  color: ${({ color, theme }) => (color ? color : theme.colors.primaryBlue)};
  background: ${({ bg, theme }) => (bg ? bg : theme.colors.primaryLightBlue)};
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s linear;
  font-size: ${({ size }) => (size === 'small' ? '0.8rem' : '1rem')};
`;

export const StyledOutlineButton = styled(StyledButton)`
  background: transparent;
  border: 1px solid
    ${({ color, theme }) => (color ? color : theme.colors.primaryBlue)};
  color: ${({ color, theme }) => (color ? color : theme.colors.primaryBlue)};
`;

export const StyledMainHeading = styled.h1`
  font-size: clamp(2rem, 8vw, 3rem);
  color: ${({ color, theme }) =>
    color ? color : theme.colors.primaryDarkGrey};
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
`;

export const StyledSection = styled.section`
  padding: ${({ padding }) => (padding ? padding : '140px 0')};
  background: ${({ bg }) => (bg ? bg : '#fff')};
  @media screen and (max-width: 768px) {
    padding: ${({ padding }) => (padding ? padding : '70px 0')};
  }
`;
