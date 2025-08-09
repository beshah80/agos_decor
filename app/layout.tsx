import { Toaster } from "sonner";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "አጎስ ዲኮር - በአዲስ አበባ ለተለያዩ ዝግጅቶች",
  description:
    "በአዲስ አበባ፣ ኢትዮጵያ ውስጥ ሰርግን፣ ልደትን፣ እና ሌሎች ዝግጅቶችን በአጎስ ዲኮር ልዩ እና ግላዊ በሆኑ ዲዛይኖች ያሳምሩ።",
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
