import styled from 'styled-components'

export const LogoContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${props => props.color}};
    flex-direction: column;
    height: 750px;
    }
    `;
export const BottonCustom = styled.button` 
    background-color: ${props => props.color}};
    border-radius: ${props => props.borderRadius}};
    width: 50%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h1`
    color: #fffffe;
    font-family: "Inter" !important;
    font-weight: 700;
    font-size: 32px;
    padding: 20px;
`
export const Pcustom= styled.p`
color: ${props => props.color}};
font-family: "Inter" !important;
`
export const LineRow = styled.hr`
    border: 1px solid #94a1b2;
    width: 90%;     
`