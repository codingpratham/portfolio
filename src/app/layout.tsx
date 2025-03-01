import { Poppins } from 'next/font/google';
import "./globals.css";
 
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "200",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppinsFont.className} >
        {children}
      </body>
    </html>
  );
}
