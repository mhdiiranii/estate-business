import "../../globals.css";
import { Providers } from "@/app/component/provider/provider";
import Nav from "../../component/nav/nav";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <Providers>
          <Nav/>
          <main className="mt-32">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
