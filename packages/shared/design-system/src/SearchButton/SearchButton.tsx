import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 32px;
  box-shadow: -4px -4px 18px 6px #fff, 0 6px 12px 0 rgba(0, 0, 0, 0.2),
    6px 0 12px 0 rgba(0, 0, 0, 0.2), -6px 0 12px 0 rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: 768px) {
    max-width: 100%;
  }
`;

const InputText = styled.input`
  font-family: inherit;
  background-color: #f0f0f0;
  flex-grow: 1;
  border: none;
  color: #212529;
  padding: 12px 0 12px 24px;
  font-weight: 500;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;

  @media only screen and (min-width: 768px) {
    padding: 18px 0 18px 32px;
    font-size: 14px;
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

const InputSubmit = styled.input`
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  padding: 0 24px;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;

  @media only screen and (min-width: 768px) {
    padding: 0 32px;
    font-size: 14px;
  }

  &:focus,
  &:active {
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline-style: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export interface SearchButtonProps {
  value?: string;
  onSubmit?: (evt: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  title?: string;
  placeholder?: string;
}

export const SearchButton: React.FC<SearchButtonProps> = ({
  value: initValue = "",
  onSubmit = (): null => null,
  onChange = (): null => null,
  disabled = false,
  title,
  placeholder,
  ...props
}): JSX.Element => {
  const [value, setValue] = useState(initValue);

  return (
    <Form onSubmit={onSubmit} {...props}>
      <InputText
        type="text"
        value={value}
        disabled={disabled}
        title={title}
        onChange={(evt) => {
          setValue(evt.target.value);
          onChange(evt);
        }}
        placeholder={placeholder}
        name="value"
      />
      <InputSubmit
        type="submit"
        disabled={disabled || value.length < 5}
        value="🔍"
        title="Search"
      />
    </Form>
  );
};
