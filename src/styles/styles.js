import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

export const LogoContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${(props) => props.color}};
    flex-direction: column;
    height: 100vh;
    }
    `;
export const BottonCustom = styled(Button)` 
    background-color: ${(props) => props.color}};
    border-radius: ${(props) => props.borderRadius}};
    width: 50%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.h1`
  color: #fffffe;
  font-weight: 700;
  font-size: 32px;
  padding: 20px;
`;
export const Pcustom = styled.p`
    color: ${(props) => props.color}};
    margin: 0px
`;


export const LineRow = styled.hr`
  border: 1px solid #94a1b2;
  width: 90%;
`;

export const TextFieldWhite = styled(TextField)`
  background-color: white;
  border-radius: 10px;
`;
