import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import Header from "@/components/Header";
import ReduxProvider from "@/store/provider";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Bills Management",
  description: "Bills Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Header />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ReduxProvider>

        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
          style={{
            width: "auto",
            minWidth: "300px",
          }}
        />
      </body>
    </html>
  );
}
