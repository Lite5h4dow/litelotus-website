import React from "react";
import Logo from "~/components/logo.tsx";
import Layout from "~/components/layout/layout.tsx";

export default function Home() {
  return (
    <div className="page">
      <head>
        <title>Shadowlabs</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <Layout>
        <p className="logo">
          <Logo />
        </p>
      </Layout>
    </div>
  );
}
