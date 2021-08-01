import React, { ComponentType } from 'react'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name="description" content="Creating apps and mods for games and every day use"/>
      </head>
      <Page {...pageProps} />
    </main>
  )
}
