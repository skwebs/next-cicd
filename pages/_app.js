import MainLayout from '@/sections/MainLayout'
import '@/styles/globals.scss'
import { ThemeProvider, useTheme } from 'next-themes'
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  const { resolvedTheme } = useTheme();

  return (
    <>
      <Head>
        <title>NextJS WebApp</title>
        <meta name="description" content="This is NextJS WebApp. Created by Satish Kumar Sharma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="16x16,32x32,64x64,96x96,192x192" href="/android-icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* <meta name="msapplication-TileColor" content={resolvedTheme === "dark" ? "#111827" : "#fff"} /> */}
        <meta name="msapplication-TileColor" content={resolvedTheme === "dark" ? "#0f172a" : "#fff"} />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content={resolvedTheme === "dark" ? "#0f172a" : "#fff"} />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  )
}
