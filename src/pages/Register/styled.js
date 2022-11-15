import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &::placeholder {
      color: #ccc;
    }

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;

export const TitleHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
