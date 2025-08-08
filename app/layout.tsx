import { Toaster } from "sonner";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sara Decor – Event Decor in Addis Ababa",
  description:
    "Transform your events with Sara Decor’s elegant, personalized styling for weddings, birthdays, and more in Addis Ababa, Ethiopia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
