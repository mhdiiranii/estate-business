import "../../globals.css";
import { Providers } from "@/app/component/provider/provider";
import '@ant-design/v5-patch-for-react-19';

export default function LogInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
