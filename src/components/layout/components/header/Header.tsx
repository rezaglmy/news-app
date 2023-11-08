import { categories } from "@/features/articles";
import { Row, Col } from "./Header.styled";
import { useHeader } from "./hooks";
import { useGlobalStore } from "@/store";

export const Header = () => {
  const { handleSelectCategory } = useHeader();
  const { category: selectedCategory } = useGlobalStore();

  return (
    <Row>
      {categories.map((category) => (
        <Col
          key={category}
          $isActive={category.toLowerCase() === selectedCategory}
          onClick={() => handleSelectCategory(category)}
        >
          {category}
        </Col>
      ))}
    </Row>
  );
};
