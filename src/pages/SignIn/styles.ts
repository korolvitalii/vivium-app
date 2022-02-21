import styled from 'styled-components';
import img from '../../assets/images/image-1.jpg';

export const Wrapper = styled.div`
  background-color: #2b93b3;
  background-image: url(${img});
  background-blend-mode: normal;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  .container {
    width: 90%;
    max-width: 30em;
    min-width: 20em;
    min-height: 20em;
    height: 25em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sign-in-text-block {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  .sign-in-title {
    font-weight: 700;
    letter-spacing: -2px;
    color: #2b93b3;
  }
  .sign-in-text {
    font-weight: 500;
  }
  .sign-in-title-icon {
    width: 35px;
    height: 35px;
    color: #2b93b3;
    border-radius: 1rem;
  }
  .button-group-button {
    border-style: none;
    color: #2b93b3;
    font-weight: 800;
    font-size: 0.75rem;
  }
  .button-group-button:hover {
    border-style: none;
    color: #2286aa;
  }
`;
