import "./globals.css";
import {Questrial, Poppins, Oswald, Josefin_Sans, Dela_Gothic_One} from 'next/font/google';
import Navbar from "@/pages/Navbar";

const questrial_init = Questrial({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-questrial',
});

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
});

const oswald_init = Oswald({
  subsets: ['latin'],
  weight: ['200','300','400','500','600','700'],
  variable: '--font-oswald',
});

const josefin_init = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700'],
  variable: '--font-josefin-sans',
});

const dela_gothic_init = Dela_Gothic_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dela-gothic-one',
});

export const metadata = {
  title: "AeroSense",
  description: "An AI-driven air quality monitoring and prediction system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>AeroSense</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`${questrial_init.variable} ${poppins_init.variable} ${oswald_init.variable} ${josefin_init.variable} ${dela_gothic_init.variable}`}>
      <Navbar /> 
        {children}
      </body>
    </html>
  );
}
