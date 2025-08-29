import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "./components/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOSProvider from "./aos-provider";
import ConditionalLayout from "./components/ConditionalLayout.js";

export const metadata = {
  title: "Reference Site",
  description: "Developed for reference purpose",
  icons: {
    icon: "/favicon2.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BootstrapClient />
        <AOSProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </AOSProvider>
      </body>
    </html>
  );
}
