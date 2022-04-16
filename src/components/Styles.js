import styled from "styled-components";

export const  Header = styled.header`
    padding: 2rem 1rem;
    margin:0 2rem 2rem;
    background-color: #e9ecef;
    border-radius: 0.3rem;

    h2{
        font-size: 2rem;
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;

        span{
            color: #6c757d;
            border: 1px solid #6c757d;
            display: inline-block;
            padding: 0.25em 0.4em;
            font-size: 75%;
            font-weight: 700;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 0.25rem;
        }
    }
`

export const Button = styled.button`
    display: inline-block;
    padding: 0.375rem 0.75rem;
    margin:0.3em 2rem;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    background-color: ${props=>props.bgColor};
    line-height: 1.5;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    outline: 0;
    cursor: pointer;
`

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    
    label{
        margin-bottom: 0.1em;
        font-size: 13pt;
        font-weight: 400;
    }
    input{
        padding: 5px 8px;
        font-size: 14pt;
        outline-color: gainsboro;
    }
`;