import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Клийн Стар ЕООД",
  description: "Вашият сигурен партньор",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
