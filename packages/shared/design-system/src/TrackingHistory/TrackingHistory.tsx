import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 24px 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12px 32px 24px 32px;

  &::after {
    position: absolute;
    content: "";
    left: 12px;
    width: 1px;
    transform: translate(-50%, 0);
    height: 100%;
    background-color: #f0f0f0;
  }

  &::before {
    position: absolute;
    content: "";
    left: 12px;
    top: 12px;
    width: 12px;
    transform: translate(-50%, 0);
    height: 12px;
    border-radius: 12px;
    background-color: #f0f0f0;
  }

  &:last-child {
    padding-bottom: 0;

    &::after {
      display: none;
    }
  }
`;

const Label = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Value = styled.span`
  font-size: 18px;
  font-weight: 300;
`;

export interface TrackingHistoryProps {
  children?: React.ReactNode;
}

export interface TrackingHistoryItemProps {
  label?: React.ReactNode;
  value?: React.ReactNode;
}

export const TrackingHistory: React.FC<TrackingHistoryProps> = ({
  children,
}): JSX.Element => <List>{children}</List>;

export const TrackingHistoryItem: React.FC<TrackingHistoryItemProps> = ({
  label,
  value,
}): JSX.Element => (
  <Item>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </Item>
);
