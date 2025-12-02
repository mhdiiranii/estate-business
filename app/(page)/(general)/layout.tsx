import "../../globals.css";
import { Providers } from "@/app/component/provider/provider";
import Nav from "../(block)/nav";
import '@ant-design/v5-patch-for-react-19';
import Footer from "../(block)/footer";


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
          <main className="">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
