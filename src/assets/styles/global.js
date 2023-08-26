import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
body{
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary[200]};
}

button{
  cursor: pointer;
}
`;