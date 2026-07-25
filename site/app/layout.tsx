import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "履历经历深挖｜把模糊经历，问成可信证据",
    description:
      "通过耐心的动态追问，把完整简历、单段描述或零散回忆整理成可信经历母档、面试锚点和岗位定制简历。",
    openGraph: {
      title: "履历经历深挖",
      description: "把模糊经历，问成可信证据。",
      type: "website",
      locale: "zh_CN",
      images: [
        {
          url: new URL("/og.png", metadataBase).toString(),
          width: 1792,
          height: 887,
          alt: "履历经历深挖：把模糊经历，问成可信证据",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "履历经历深挖",
      description: "把模糊经历，问成可信证据。",
      images: [new URL("/og.png", metadataBase).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
