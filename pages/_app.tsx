import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { ThemeHookProvider } from '../src/theme/Theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeHookProvider >
        <NextSeo
          title="Vincent's Portfolio"
          description="Portfolio Website for Vincent Dominic"
          canonical="https://vincentdominic.com"
          openGraph={{
            title: 'Vincent Dominic',
            description: 'Software Engineer and Full-Stack Developer with expertise in building high-performance applications that serve 100K+ users. Specializing in React, Next.js, Flutter, and Node.js.',
            url: 'https://vincentdominic.com',
            type: 'profile',
            profile: {
              firstName: 'Vincent',
              lastName: 'Dominic',
              username: 'vincentdominic',
              gender: 'male',
            },
            images: [
              {
                url: '/assets/images/man2.jpg',
                width: 850,
                height: 650,
                alt: 'Profile Photo',
              },
            ],
          }}
        />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      <Component {...pageProps} />
    </ThemeHookProvider>
  )
}
