"use client";

import { Container, Box } from "@mui/material";
import Header from "@/app/components/templates/header";
import Footer from "@/app/components/templates/footer";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "@/app/store/store";
function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
      <link rel="icon" href="data:,"></link>
      <body>

        <SessionProvider>
          <Provider store={store}>
            <Header />
            <Container maxWidth={false} disableGutters={true}>
              <Box sx={{ height: "100vh" }}>{children}</Box>
            </Container>
            <Footer />
          </Provider>
        </SessionProvider>

      </body>
    </html>
  );
}

export const config = {
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
  },
};

export default RootLayout;
