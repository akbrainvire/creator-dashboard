import { Global } from "@/styles/Global";
import TransitionStyles from "@/styles/TransitionStyles";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/strawford-regular-webfont.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Global />
      <TransitionStyles />
      <Component {...pageProps} />
    </main>
  );
}
