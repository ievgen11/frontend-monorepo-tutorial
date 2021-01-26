import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  padding: 20px 24px 30px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    margin: auto;
    padding: 64px 80px 30px 80px;
    max-width: 900px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
`;

const Image = styled.img`
  max-width: 150px;
  margin: 30px 0 0 0;

  @media only screen and (min-width: 600px) {
    max-width: 250px;
    margin: 0 0 0 60px;
  }
`;

export interface SectionProps {
  children?: React.ReactNode;
  image?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  image,
}): JSX.Element => (
  <Wrapper>
    <Container>
      <Content>{children}</Content>
      {image ? <Image src={image} /> : null}
    </Container>
  </Wrapper>
);
