import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeHookProvider } from "../src/theme/Theme";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeHookProvider>
      <Head>
        {/* Explicit Open Graph Image Meta Tag */}
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dnfzcato8/image/upload/v1739026651/Photo_on_16-01-2025_at_8.30_AM_iwayjt.jpg"
        />
        <meta property="og:image:width" content="850" />
        <meta property="og:image:height" content="650" />
        <meta property="og:image:alt" content="Profile Photo" />
      </Head>
      <NextSeo
        title="Vincent's Portfolio"
        description="Portfolio Website for Vincent Dominic"
        canonical="https://vincentdominic.vercel.app"
        openGraph={{
          title: "Vincent Dominic",
          description:
            "Software Engineer and Full-Stack Developer with expertise in building high-performance applications that serve 100K+ users. Specializing in React, Next.js, Flutter, and Node.js.",
          url: "https://vincentdominic.vercel.app",
          type: "profile",
          profile: {
            firstName: "Vincent",
            lastName: "Dominic",
            username: "vincentdominic",
            gender: "male",
          },
          images: [
            {
              url: "https://res.cloudinary.com/dnfzcato8/image/upload/v1739026651/Photo_on_16-01-2025_at_8.30_AM_iwayjt.jpg",
              width: 850,
              height: 650,
              alt: "Profile Photo",
            },
          ],
        }}
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <Component {...pageProps} />
    </ThemeHookProvider>
  );
}
