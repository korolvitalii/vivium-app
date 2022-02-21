import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0.5rem;
  .table-toolbar,
  .table-toolbar-date-inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
  .MuiOutlinedInput-root,
  .MuiInput-root {
    margin-bottom: 1rem;
  }
  .table-toolbar div,
  .table-toolbar label {
    padding-right: 1rem;
  }

  @media (min-width: 40em) {
    .table-toolbar {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }
  }
  .select-input {
    min-width: 200px;
  }
  .date-picker-text-field {
    min-width: 13rem;
  }
`;
