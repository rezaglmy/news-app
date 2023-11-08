import { useArticles } from "../hooks";
import { pageSize } from "../constants";
import { useGlobalStore } from "@/store";
import {
  ListItem,
  List,
  Image,
  ItemDetail,
  SearchInput,
} from "./ArticlesPage.styled";
import { Layout } from "@/components";

export default function ArticlesPage() {
  const {
    articlesData,
    error,
    isLoading,
    total,
    pageNumber,
    gotoPage,
    onSearch,
  } = useArticles();

  const {
    windowSize: { md },
  } = useGlobalStore();

  if (error) return <div>Failed to load articles</div>;

  return (
    <Layout>
      <SearchInput
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onChange={(e) => onSearch(e.target.value)}
        onSearch={onSearch}
      />
      <List
        loading={isLoading}
        itemLayout="vertical"
        size="large"
        grid={md ? { column: 1, gutter: 16 } : undefined}
        pagination={{
          total: total,
          defaultPageSize: pageSize,
          defaultCurrent: pageNumber,
          showSizeChanger: false,
          onChange: gotoPage,
          responsive: true,
          position: "bottom",
        }}
        dataSource={articlesData?.results}
        renderItem={(item) => (
          <ListItem key={item.title}>
            <Image width={md ? 300 : 400} alt="image" src={item.imageUrl} />
            <ItemDetail>
              <ListItem.Meta
                title={
                  <a href={item.link} target="_blank">
                    {item.title}
                  </a>
                }
                description={item.description}
              />
              {item.content}
            </ItemDetail>
          </ListItem>
        )}
      />
    </Layout>
  );
}
