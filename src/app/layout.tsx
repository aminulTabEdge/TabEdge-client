import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "TabEdge",
  description:
    "TabEdge is your go-to digital banking platform offering seamless online banking solutions, virtual credit cards, prepaid Visa cards, and international debit cards tailored for global users. With TabEdge, open a free checking account, access a virtual Visa card instantly, and enjoy secure, worldwide transactions with trusted partners like Visa and Mastercard. Whether you’re managing your money online, looking for the best virtual debit card, or wondering how to get a virtual credit card, TabEdge makes financial freedom easy. Trusted by digital bank users globally, we rival services like Chime, Revolut, N26, and more. Simplify your finances with TabEdge today",
  keywords:
    "TabEdge, TabEdge Banking, TabEdge cross border transaction, Secure USD payment",
  openGraph: {
    title: "TabEdge Banking",
    description: "Discover the best services with us.",
    type: "website",
    url: "https://tabedge.com",
    siteName: "TabEdge",
  },
};

export type ChildrenType = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: ChildrenType) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
