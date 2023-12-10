import styled from 'styled-components';

export const FormTypeCardStyled = styled.article`
  background: ${props => props.theme.colors.block};
  margin-bottom: 25px;
  padding: 30px 0;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div:nth-child(2) {
    flex: 9; // 두번째 자식 div가 90%의 너비를 차지
    padding: 0 20px;

    button {
      margin-top: 20px;
    }
  }

  & > div:nth-child(1),
  & > div:nth-child(3) {
    flex: 1; // 첫번째와 세번째 자식 div가 각각 5%의 너비를 차지
    text-align: center;
  }
`;
