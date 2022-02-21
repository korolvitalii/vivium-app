import styled from 'styled-components';

export const Wrapper = styled.div`
  .form-container {
    display: flex;
    flex-direction: column;
    min-height: 15rem;
    min-width: 16rem;
  }
  .form-container div {
    margin: 0.75rem 0;
  }
  .form-container div:after {
    transition: background-color 0.5s ease;
    border-style: none;
  }
  .form-container input[type='submit'] {
    margin-top: 1rem;
    background: #2b93b3;
    border: none;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.75em;
    height: 2rem;
    border-radius: 3px;
  }
  .form-container input[type='email'] {
    height: 10rem;
  }
  .form-container input[type='submit']:focus {
    transition: background-color 0.5s ease;
  }
  .form-container input[type='submit']:hover {
    background: #2286aa;
    transition: background-color 0.5s ease;
  }
  .form-container input[type='email']:focus {
    border-style: none;
    transition: background-color 0.5s ease;
  }
  .form-container input[type='text']::placeholder,
  .form-container input[type='password']::placeholder {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 800;
  }
  .form-container input[type='email']:hover {
    transition: background-color 0.5s ease;
  }
  .form-error-text {
    color: red;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
