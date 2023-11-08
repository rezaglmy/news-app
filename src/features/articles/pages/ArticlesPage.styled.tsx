import { List as BaseList, Image as BaseImage, Input } from "antd";
import { ListItemTypeProps } from "antd/es/list/Item";
import { ListProps } from "antd/lib/list";
import styled from "styled-components";

export const List = styled(BaseList)<ListProps<ListItemTypeProps>>`
  .ant-list-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }

  .ant-list-pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ListItem = styled(List.Item)`
  width: 800px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 16px;
  display: flex !important;
  flex-direction: column;
  gap: 16px;
  justify-content: center !important;
  align-items: center !important;
  padding: 24px !important;
`;

export const ItemDetail = styled.div`
  width: 100%;
`;

export const Image = styled(BaseImage)`
  border-radius: 16px;
`;

export const SearchInput = styled(Input.Search)`
  width: 800px;
  margin-bottom: 24px;
`
