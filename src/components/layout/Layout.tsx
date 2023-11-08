import { PropsWithChildren } from "react";
import { Container } from "./Layout.styled";
import { Header } from "./components/header/Header";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
