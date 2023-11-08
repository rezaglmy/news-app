import { Row as BaseRow, Col as BaseCol } from "antd";
import styled from "styled-components";

export const Row = styled(BaseRow)`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 100px;
`;

export const Col = styled(BaseCol)<{ $isActive: boolean }>`
  padding: 16px;
  border-radius: 4px;
  border: ${({ $isActive }) =>
    $isActive ? "2px solid #52c41a" : "0.5px solid #cfcfcf"};
  cursor: pointer;
  color: #707070;
`;
