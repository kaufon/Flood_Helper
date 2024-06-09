import "./globals.css";


export const metadata = {
  title: "Flood Help",
  description: "Flood help",
  charSet: "utf-8"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width:device-width , initial-scale=1"/>
      </head>
      <body >{children}</body>
    </html>
  );
}
