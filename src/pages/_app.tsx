import React, { useEffect } from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

import theme from "../ui/themeConfig";
import { useGlobalStore } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  const { handleResizeWindow } = useGlobalStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResizeWindow);
      handleResizeWindow();
      return () => window.removeEventListener("resize", handleResizeWindow);
    }
  }, []);

  return (
    <ConfigProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ConfigProvider>
  );
};

export default App;
