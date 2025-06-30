import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import "./globals.css";

// 配置Inter字体
const inter = Inter({ subsets: ["latin"] });

// 全局元数据
export const metadata: Metadata = {
  title: {
    template: '%s | 娄敏',
    default: '娄敏 - 金融投资专家 | 科技创新投资人',
  },
      description: '娄敏的个人网站 - 10年科技创新股权投资经验，专注于产业数字化、企业服务、金融科技等领域的早期创新项目投资。',
  keywords: ['娄敏', '金融投资', '科技创新', '股权投资', '产业数字化', '企业服务', '金融科技'],
  authors: [{ name: '娄敏' }],
  creator: '娄敏',
  publisher: '娄敏',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://loumin.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/zh',
      'en-US': '/en',
      'fr-FR': '/fr',
    },
  },
  openGraph: {
    title: '娄敏 - 金融投资专家',
    description: '10年科技创新股权投资经验，专注于产业数字化、企业服务、金融科技等领域的早期创新项目投资。',
    url: 'https://loumin.dev',
    siteName: '娄敏的个人网站',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: '娄敏 - 金融投资专家',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '娄敏 - 金融投资专家',
    description: '10年科技创新股权投资经验，专注于产业数字化、企业服务、金融科技等领域的早期创新项目投资。',
    images: ['/og.jpg'],
    creator: '@loumin',
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 获取当前语言设置
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            defaultTheme="system"
            enableSystem
          >
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1 pt-16">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
