import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/Navbar/navbar";
import { Inter } from "next/font/google";
import GlobalStyles from "@/styles/Global.styled";

import "@aws-amplify/ui-react/styles.css";
import AmplifyComponent from "@/components/Amplify/amplify-component";
import { Authenticator } from "@aws-amplify/ui-react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Combat Sports Ranking",
  description: "Ranking platform for combat sport",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StyledComponentsRegistry>
          <AmplifyComponent>
            <Navbar />
            {children}
            <GlobalStyles />
          </AmplifyComponent>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
