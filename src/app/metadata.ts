import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jamba Ganzorig - Senior Software Engineer",
  description:
    "Full-stack developer specializing in React, Next.js, and modern web technologies. Building scalable applications that solve real-world problems.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Web Development",
    "JavaScript",
    "Node.js",
  ],
  authors: [
    { name: "Jamba Ganzorig", url: "https://jambaganzorig.dev" },
  ],
  creator: "Jamba Ganzorig",
  publisher: "Jamba Ganzorig",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jambaganzorig.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jamba Ganzorig - Senior Software Engineer",
    description:
      "Full-stack developer specializing in React, Next.js, and modern web technologies.",
    url: "https://jambaganzorig.dev",
    siteName: "Jamba Ganzorig Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jamba Ganzorig - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamba Ganzorig - Senior Software Engineer",
    description:
      "Full-stack developer specializing in React, Next.js, and modern web technologies.",
    creator: "@jambamitch",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#3b82f6" },
    ],
  },
  manifest: "/site.webmanifest",
};
