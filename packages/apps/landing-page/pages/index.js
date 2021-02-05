import React, { useState, useEffect } from "react";
import { ClientHeader, Section, Footer } from "@delipack/design-system";

const LandingPage = () => {
  useEffect(() => {
    const setLoadingState = (element) => {
      element.className = element.className.replace("not-loaded", "loaded");
    };
    setLoadingState(document.getElementsByTagName("BODY")[0]);
  });

  return (
    <>
      <ClientHeader>
        <p>This website is built with NextJS and a shared Design System 🎉</p>
      </ClientHeader>
      <Section>
        <h1>What does this project do?</h1>
        <p>
          <b>Delipack</b> is an imaginary company that offers customers package
          tracking using a tracking code.
        </p>
        <p>
          This project is part of a step-by-step guide for developing frontend
          applications based on a shared Design System using{" "}
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
          .
        </p>
        <p>
          Delipack consists of a <b>landing page</b> (this website),{" "}
          <b>admin interface</b> and the main <b>client interface</b>.
        </p>
        <ul style={{ padding: "0", listStyle: "none" }}>
          <li>
            <h3>📌 Landing Page</h3>
            <p>
              The marketing website. SEO-friendly and contains lot's of
              buzzwords with links to the product. <br />
              Built using <b>NextJS</b> and <b>react</b>.
            </p>
            <hr />
            <a href="http://delipack.web.app/">delipack.web.app</a> (this
            website)
          </li>
          <li>
            <h3>🤖 Admin Interface</h3>
            <p>
              The administration application that is only accessible to
              employees. Used for data management, for example. <br />
              Built using <b>typescript</b>, <b>react</b>,{" "}
              <b>react-router-dom</b> and <b>SCSS</b>.
            </p>
            <hr />
            <a href="https://admin-delipack.web.app/">admin-delipack.web.app</a>
          </li>
          <li>
            <h3>📦 Client Interface</h3>
            <p>
              The actual application the client will be using. <br />
              Built using <b>ES6</b>, <b>react</b>, <b>react-router-dom</b> and{" "}
              <b>SCSS</b>.
            </p>
            <hr />
            <a href="https://client-delipack.web.app/">
              client-delipack.web.app
            </a>
          </li>
          <li>
            <h3>🎨 Design System</h3>
            <p>
              Component library that is compiled and can be used by other
              applications. Additionally, can be showcased using{" "}
              <a href="https://storybook.js.org/" taget="_blank">
                Storybook
              </a>
              .<br />
              Built using <b>typescipt</b>, <b>react</b>,{" "}
              <b>react-router-dom</b> and <b>styled-components</b>.
            </p>
            <hr />
            <a href="https://design-system-delipack.web.app/">
              design-system-delipack.web.app
            </a>
          </li>
        </ul>
      </Section>
      <Section>
        <img
          style={{
            display: "block",
            maxWidth: "100%",
            margin: "auto",
          }}
          src="/delipack_splash.png"
        />
      </Section>
      <Footer />
    </>
  );
};

export default LandingPage;
