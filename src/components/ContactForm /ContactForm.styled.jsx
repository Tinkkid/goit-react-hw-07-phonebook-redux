import styled from '@emotion/styled';

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
`;

export const InputForContact = styled.input`
  width: 300px;
  font-size: 16px;
  border-radius: 5px;
  padding: 13px 20px;
  padding-left: 55px;
  font-weight: 500;
  border-radius: 4px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
`;

export const LabelInputContact = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #c4c3ca;
`;
export const BtnSubmit = styled.button`
  border-radius: 4px;
  height: 44px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  cursor: pointer;
  background-color: #ffeba7;
  color: #102770;
  box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);

  &:focus,
  &:hover {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }
`;

export const IconUser = styled.i`
  position: relative;
  top: 0;
  left: 10%;
  font-size: 18px;
  color: #ffeba7;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const TitleLable = styled.span`
  margin-left: 20px;
`;
