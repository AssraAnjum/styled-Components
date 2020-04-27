import React from 'react';
import styled from 'styled-components';


const Title = styled.div`
    font-size:  1.5rem;
    color: palevioletred;
    padding:1em 5em;
`;
const Wrapper = styled.div`
    padding:0em 20em;
    display:block;
    
`;
const Button = styled.div`
    background: ${props => props.primary ? "palevioletred" : "white" }
    color: ${props => props.primary ? "white" : "palevioletred"}
    font-size:1em;
    margin:0.2em;
    padding:0.25em 1em;
    border:2px solid palevioletred;
    border-radius:3px;
    display:inline;
`;
const TomatoButton = styled(Button)`
    color : tomato;
    text-decoration:none;
`;

const Link = styled.div`
    display:flex;
   margin:1em;
   float:left;
`;
const StyledLink = styled(Link)`
    color:palevioletred;
    font-weight:bold;
    display:flex;
`;
const Input = styled.input`
    padding:0.5em;
    margin:0.5em;
    color:${props => props.inputColor || "brown" };
    background:papayawhip;
    border:none;
    border-radius:3px;
`;
const Thing= styled.div.attrs(()=>({tabIndex:0}))`
    color:blue;
    &:hover{
        color:red;
    }
    & ~ & {
        background:tomato;
    }
    & + &{
        background:lime;
    }
    &.something{
        background:orange;
    }
    .something-else &{
        border:1px solid;
    }
`;
const ReverseButton = props => <Button {...props} children={props.children.split('').reverse()}/>
const index = () => {
  return (
    <Wrapper>
        <Title>
            Assra Anjum
        </Title>
        <Button as={ReverseButton}>Normal</Button>
        <Button primary>primary</Button>
        <TomatoButton as="a" href="https://www.google.com/">Tomato Button</TomatoButton>
        <Link>Unstyled, Boring Link</Link>
        <StyledLink>Styled, exciting Link</StyledLink>
        <Input defaultValue="Amyra" type="text" />
        <Input defaultValue="Assra" type="text" inputColor="red"/>
        <Thing>Hello</Thing>
        <Thing>This is Assra Anjum</Thing>
        <Thing className="something">This concept is about</Thing>
        <div>---></div>
        <Thing>Pseudoelements, pseudoselectors, and nesting</Thing>
        <div className="something-else">
        <Thing>Thank you</Thing>
        
        </div>
    </Wrapper>
       
  
  );
}

export default index;