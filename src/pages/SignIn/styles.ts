import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #dddce1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .container {
    width: 80%;
    max-width: 500px;
    min-width: 200px;
    min-height: 200px;
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
    border-radius: 20px;
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
