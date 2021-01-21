import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #f0f0f0;
  border: none;
  color: #212529;
  padding: 12px 24px;
  border-radius: 32px;
  font-weight: 500;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-shadow: -4px -4px 18px 6px #fff, 0 6px 12px 0 rgba(0, 0, 0, 0.2),
    6px 0 12px 0 rgba(0, 0, 0, 0.2), -6px 0 12px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    padding: 18px 32px;
    font-size: 14px;
  }

  &:hover {
    background-color: #fff;
    transform: translate(0, -1px);
  }

  &:focus,
  &:active {
    background-color: #fff;
    box-shadow: -4px -4px 12px 8px #f0f0f0, 0 2px 6px 0 rgba(0, 0, 0, 0.2),
      2px 0 6px 0 rgba(0, 0, 0, 0.2), -2px 0 6px 0 rgba(0, 0, 0, 0.2);
    transform: translate(0, 1px);
  }

  &:focus {
    outline-style: none;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #c8c8c8;
    color: #a0a0a0;
  }
`;

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  title?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick = (): null => null,
  ...props
}): JSX.Element => (
  <StyledButton onClick={(): void => onClick()} {...props}>
    {children}
  </StyledButton>
);
