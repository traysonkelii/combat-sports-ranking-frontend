import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "./components/Navbar/navbar";
import { Inter } from "next/font/google";
import GlobalStyles from "@/styles/Global.styled";

import "@aws-amplify/ui-react/styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Combat Sports Ranking",
  description: "Ranking platform for combat sport",
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
