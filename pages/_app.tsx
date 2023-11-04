import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

function MyApp({ Component, pageProps }) {
  const preferredColorScheme = useColorScheme();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: preferredColorScheme,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
