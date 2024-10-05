import Head from "next/head";
import UpdateFooter from "./UpdateFooter";

export default function About() {
    return (
      <>
      <Head>
      <title>Aerosense - About</title>
      <meta name="description" content="About AeroSense" />
      </Head>
      <div>
        <h1>About Page</h1>
        <p>This is the about page content.</p>
      </div>
      <UpdateFooter/>
      </>
    );
  }
  