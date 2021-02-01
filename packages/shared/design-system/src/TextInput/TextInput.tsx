import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  font-family: inherit;
  background-color: #fff;
  border: none;
  color: #212529;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 32px;
  box-sizing: border-box;
  box-shadow: -4px -4px 18px 6px #fff, 0 6px 12px 0 rgba(0, 0, 0, 0.2),
    6px 0 12px 0 rgba(0, 0, 0, 0.2), -6px 0 12px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in-out;

  @media only screen and (min-width: 768px) {
    padding: 18px 32px;
    font-size: 14px;
  }

  &:focus,
  &:active {
    text-decoration: underline;
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

export interface TextInputProps {
  value?: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  title?: string;
  placeholder?: string;
  type?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  value: initValue = "",
  onChange = (): null => null,
  disabled = false,
  placeholder,
  ...props
}): JSX.Element => {
  const [value, setValue] = useState(initValue);

  return (
    <Input
      type="text"
      value={value}
      disabled={disabled}
      onChange={(evt) => {
        setValue(evt.target.value);
        onChange(evt);
      }}
      placeholder={placeholder}
      {...props}
    />
  );
};
