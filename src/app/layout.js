import "./globals.css";

export const metadata = {
  title: {
    default: "Auto Tech",
    template: "%s | Auto Tech"
  },
  description: "Auto Tech is the best automobile service in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="assets/logo1.png" type="image/png" sizes="any"/>
      </head>
      <body className="">
        {children}
      </body>
    </html>
  );
}
