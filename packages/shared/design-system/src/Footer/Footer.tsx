import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  margin-top: 60px;
  background-color: transparent;
`;

const Container = styled.div`
  width: 100%;
  padding: 30px 24px 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    padding: 30px 80px 64px 80px;
    flex-direction: row;
    margin: auto;
    max-width: 1200px;
  }
`;

export const Footer: React.FC = (): JSX.Element => (
  <Wrapper>
    <Container>
      <p>
        🎉 Monorepo created using:{" "}
        <a href="https://lerna.js.org/" target="_blank">
          Lerna
        </a>
        ,{" "}
        <a
          href="https://classic.yarnpkg.com/en/docs/workspaces/"
          target="_blank"
        >
          Yarn Workspaces
        </a>
        ,{" "}
        <a href="https://webpack.js.org/" target="_blank">
          Webpack
        </a>
        ,{" "}
        <a href="https://storybook.js.org/" target="_blank">
          Storybook
        </a>{" "}
        and{" "}
        <a href="https://firebase.google.com/" target="_blank">
          Firebase
        </a>
        . Source code can be found{" "}
        <a href="https://github.com/ievgen11/delipack" target="_blank">
          here
        </a>
        .
      </p>
    </Container>
  </Wrapper>
);
