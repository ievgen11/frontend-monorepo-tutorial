import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: auto;
  background-color: transparent;

  @media only screen and (min-width: 768px) {
    height: 150px;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 20px 24px 30px 24px;
  position: unset;
  background-color: #f0f0f0;
  box-sizing: border-box;
  box-shadow: 0 0 16px 32px #f0f0f0;
  z-index: 1;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (min-width: 768px) {
    width: 100%;
    margin: auto;
    padding: 64px 80px 30px 80px;
    flex-direction: row;
    align-items: center;
    max-width: 1200px;
  }
`;

const LogoContainer = styled.div`
  flex-grow: 1;
  margin-bottom: 12px;
  margin-right: 24px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Logo = styled.img`
  height: 25px;
  width: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

import clientLogo from "./images/client_logo.png";
import adminLogo from "./images/admin_logo.png";

export interface HeaderProps {
  children?: React.ReactNode;
  logo?: string;
  onLogoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  logo,
  onLogoClick,
}): JSX.Element => (
  <Wrapper>
    <Container>
      {logo ? (
        <LogoContainer>
          <Logo onClick={onLogoClick} src={logo} />
        </LogoContainer>
      ) : null}
      {children}
    </Container>
  </Wrapper>
);

export const ClientHeader: React.FC<HeaderProps> = (props): JSX.Element => (
  <Header logo={clientLogo} {...props} />
);

export const AdminHeader: React.FC<HeaderProps> = (props): JSX.Element => (
  <Header logo={adminLogo} {...props} />
);
