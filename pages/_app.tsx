import type { AppProps } from "next/app";
import React from "react";
import Header from "../components/Header";
import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    </>
  );
}
export default MyApp;
