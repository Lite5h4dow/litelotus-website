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
          <meta
            name="description"
            content="Creating apps and mods for games and every day use"
          />
        </head>
        <Page {...pageProps} />
      </AppContext.Provider>
    </main>
  );
}
