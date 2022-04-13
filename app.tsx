import React, { ComponentType, useState } from "react";
import { AppContext, IAppState } from "~/lib/context/appContext.ts";

export default function App({
  Page,
  pageProps,
}: {
  Page: ComponentType<any>;
  pageProps: any;
}) {
  const [state, setState] = useState<IAppState>({ darkMode: true });
  return (
    <main>
      <AppContext.Provider value={{ state: state, dispatcher: setState }}>
        <head>
          <meta name="viewport" content="width=device-width" />
          <link rel="icon" type="image/svg+xml" href="/logo.svg" />
          <title>Shadowlabs</title>
          <meta name="title" content="Shadowlabs" />
          <meta
            name="description"
            content="Shadowlabs makes clean and responsive websites, apps, and mods."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shadowlabs.studio/" />
          <meta property="og:title" content="Shadowlabs" />
          <meta
            property="og:description"
            content="Shadowlabs makes clean and responsive websites, apps, and mods."
          />
          <meta
            property="og:image"
            content="https://shadowlabs.studio/logo.svg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://shadowlabs.studio/" />
          <meta property="twitter:title" content="Shadowlabs" />
          <meta
            property="twitter:description"
            content="Shadowlabs makes clean and responsive websites, apps, and mods."
          />
          <meta property="twitter:image" content="https://shadowlabs.studio/">
          </meta>
        </head>
        <Page {...pageProps} />
      </AppContext.Provider>
    </main>
  );
}
