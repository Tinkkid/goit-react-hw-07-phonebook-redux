import styled from '@emotion/styled';

export const Name = styled.span`
  margin-right: 5px;
  color: #c4c3ca;
`;
export const Number = styled.span`
  margin-right: 10px;
  color: #c4c3ca;
`;

export const BtnDelete = styled.button`
  border-radius: 4px;
  height: 24px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 200ms linear;
  padding: 0 15px;
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
