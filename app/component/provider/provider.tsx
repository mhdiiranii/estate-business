"use client";

import { ReactNode, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "next-themes";
import '@ant-design/v5-patch-for-react-19';
import { useSetDefaultTheme } from "@/app/Store/useStore";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {

  const setTheme = useSetDefaultTheme();

  useEffect(()=>{
   setTheme();
  },[])

  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      <AntdRegistry>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </SessionProvider>
      </AntdRegistry>
    </ThemeProvider>
  );
}
