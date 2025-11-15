import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupProvider from "@/components/PopupProvider";
import { ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "MEET KI DUKAAN Franchise - Start Your E-commerce Business Today",
  description:
    "Join MEET KI DUKAAN franchise and build a profitable e-commerce business. Get complete training, support, and proven systems to succeed in online retail.",
  keywords:
    "ecommerce franchise, online business, franchise opportunity, MEET KI DUKAAN, digital marketing",
  authors: [{ name: "MEET KI DUKAAN" }],
  creator: "MEET KI DUKAAN",
  publisher: "MEET KI DUKAAN",
  openGraph: {
    title: "MEET KI DUKAAN Franchise - Start Your E-commerce Business Today",
    description:
      "Join MEET KI DUKAAN franchise and build a profitable e-commerce business. Get complete training, support, and proven systems to succeed in online retail.",
    url: "https://franchise.ecomseekho.com",
    siteName: "MEET KI DUKAAN Franchise",
    images: [
      {
        url: "https://customer-assets.emergentagent.com/ecom-seekho-og.jpg",
        width: 1200,
        height: 630,
        alt: "MEET KI DUKAAN Franchise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEET KI DUKAAN Franchise - Start Your E-commerce Business Today",
    description:
      "Join MEET KI DUKAAN franchise and build a profitable e-commerce business.",
    images: ["https://customer-assets.emergentagent.com/ecom-seekho-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PopupProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </PopupProvider>
      </body>
    </html>
  );
}
