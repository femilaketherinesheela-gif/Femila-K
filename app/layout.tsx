import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle = "Femila Ketherine Sheela K. | Developer Portfolio";
const siteDescription =
  "The portfolio of Femila Ketherine Sheela K., a first-year Computer Science student, aspiring software developer, and lifelong learner.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: "Femila Ketherine Sheela K. Portfolio",
  keywords: [
    "Femila Ketherine Sheela K.",
    "software developer",
    "Computer Science",
    "portfolio",
    "Python",
    "C++",
  ],
  authors: [{ name: "Femila Ketherine Sheela K." }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090e1b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
