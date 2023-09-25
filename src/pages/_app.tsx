import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Sidenav from "~/components/Sidenav";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Welcome to Twiket</title>
        <meta
          name="discription"
          content="A social media site for concert lovers: connect, share, post, all
          before your event 🤠"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex">
        <Sidenav />
        <div className=" min-h-screen flex-grow border-x">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
