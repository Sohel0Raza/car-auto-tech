import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { Roboto_Mono } from 'next/font/google'
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: {
    default: "Auto Tech",
    template: "%s | Auto Tech",
  },
  description: "Auto Tech is the best automobile service in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="assets/logo1.png" type="image/png" sizes="any" />
      </head>
      <body className={roboto_mono.className}>
        <Navbar />
        <div className="">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
