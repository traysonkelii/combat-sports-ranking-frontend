import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "./components/Navbar/navbar";
import { Inter } from "next/font/google";
import GlobalStyles from "@/styles/Global.styled";

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
          <Navbar />
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
