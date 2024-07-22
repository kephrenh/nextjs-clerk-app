import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Clerk App",
  description: "Authentication with Clerk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto flex flex-col items-center">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
