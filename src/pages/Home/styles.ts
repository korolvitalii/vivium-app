import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #fafafa;
  .button-logout {
    width: 10rem;
    border: 1px solid gray;
    margin: 0.5rem 2rem;
    color: black;
  }
  @media (max-width: 40em) {
    display: flex;
    align-items: flex-start;
    .button-logout {
      margin: 0.5rem 2rem;
    }
  }
`;
