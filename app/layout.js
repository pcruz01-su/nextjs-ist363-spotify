import Header from "../components/regions/Header";
import Footer from "../components/regions/Footer";

import "../sass/global.scss";

export const metadata = {
  title: "IST 363 Spotify",
  description:
    "An applicaition powered by Wordpress, React, Next.js and Spotify API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
