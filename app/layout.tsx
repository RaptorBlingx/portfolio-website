import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jarad.dev"),
  title: {
    default: "Mohamad Jarad — AI-Augmented Software Engineer",
    template: "%s | Mohamad Jarad",
  },
  description:
    "I design and ship production industrial AI systems and agent-driven development workflows for EU-funded projects. AI assistants, EnMS platforms, and scalable IoT pipelines.",
  keywords: [
    "AI Systems Engineer",
    "Industrial AI",
    "Energy Management Systems",
    "EU R&D projects",
    "LLM integration",
    "AI agents developer",
    "industrial IoT engineer",
  ],
  authors: [{ name: "Mohamad Jarad" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jarad.dev",
    siteName: "Mohamad Jarad",
    title: "Mohamad Jarad — AI-Augmented Software Engineer",
    description:
      "Production industrial AI systems, agent-driven workflows, and EU-funded R&D. AI assistants, EnMS platforms, and IoT pipelines.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamad Jarad — AI-Augmented Software Engineer",
    description:
      "Production industrial AI systems, agent-driven workflows, and EU-funded R&D.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamad Jarad",
  jobTitle: "AI-Augmented Software Engineer",
  url: "https://jarad.dev",
  sameAs: [
    "https://github.com/RaptorBlingx",
    "https://linkedin.com/in/raptorblingx",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <a href="#main" className="skip-to-content">
            Skip to content
          </a>
          <Header />
          <main id="main" className="min-h-[calc(100vh-8rem)]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
