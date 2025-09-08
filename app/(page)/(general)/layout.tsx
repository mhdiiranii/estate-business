import "../../globals.css";
import { Providers } from "@/app/component/provider/provider";
import Nav from "../../component/nav/nav";
import '@ant-design/v5-patch-for-react-19';
import Footer from "@/app/component/footer/footer";


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
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
