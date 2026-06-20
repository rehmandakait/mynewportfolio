import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });

export const metadata: Metadata = {
  title: 'Charan Aerpula (A Charan Teja Yadav) — Android, Linux & Web Developer',
  description: 'Charan Aerpula (A Charan Teja Yadav) from Hyderabad is an Android, Linux, and Web Developer building native apps, scalable backends, and data-driven web tools. Available for hire.',
  keywords: ["charan aerpula", "aerpula", "a charan teja yadav", "charan teja yadav", "charan hyderabad", "Android developer", "Linux developer", "web developer", "Go developer", "Kotlin", "Python", "Node.js", "WebRTC", "freelance developer India"],
  alternates: {
    canonical: 'https://charantejayadav.aerpula.app'
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: 'https://cdn-icons-png.flaticon.com/128/270/270780.png',
    shortcut: 'https://cdn-icons-png.flaticon.com/128/270/270780.png',
    apple: 'https://cdn-icons-png.flaticon.com/128/270/270780.png',
  },
  openGraph: {
    type: "website",
    url: "https://charantejayadav.aerpula.app",
    title: "Charan Aerpula (A Charan Teja Yadav) — Android, Linux & Web Developer",
    description: "Charan Aerpula (A Charan Teja Yadav) from Hyderabad is an Android, Linux, and Web Developer building native apps, scalable backends, and data-driven web tools. Available for hire.",
    images: [{
      url: "https://charantejayadav.aerpula.app/og-image.png",
      width: 1200,
      height: 630,
      alt: "Charan Aerpula (A Charan Teja Yadav) — Android, Linux & Web Developer Portfolio"
    }],
    locale: "en_US",
    siteName: "Charan Aerpula Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Charan Aerpula (A Charan Teja Yadav) — Android, Linux & Web Developer",
    description: "Charan Aerpula (A Charan Teja Yadav) from Hyderabad is an Android, Linux, and Web Developer building native apps, scalable backends, and data-driven web tools.",
    images: ["https://charantejayadav.aerpula.app/og-image.png"]
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Charan Aerpula",
    "alternateName": ["A Charan Teja Yadav", "Charan Teja Yadav"],
    "url": "https://charantejayadav.aerpula.app",
    "email": "contact@aerpula.app",
    "jobTitle": "Full-Stack Developer & Data Analyst",
    "description": "Full-stack developer and data analyst specializing in Android/iOS, Go, Python, Node.js, and WebRTC.",
    "image": "https://charantejayadav.aerpula.app/avatar.png",
    "sameAs": [
      "https://github.com/charanaerpula23-boop",
      "https://www.instagram.com/charanvikramadhitya",
      "https://www.linkedin.com/in/charantejayadav-aerpula"
    ],
    "knowsAbout": ["Android", "iOS", "Kotlin", "Swift", "Go", "Python", "Node.js", "WebRTC", "React", "TypeScript", "Data Analysis", "Rust", "Java"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressCountry": "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://charantejayadav.aerpula.app",
    "name": "Charan Aerpula (A Charan Teja Yadav) Portfolio",
    "description": "Personal portfolio of Charan Aerpula (A Charan Teja Yadav), full-stack developer and data analyst from Hyderabad.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://charantejayadav.aerpula.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Charan Aerpula",
      "alternateName": ["A Charan Teja Yadav", "Charan Teja Yadav"]
    }
  }
];

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#1F4E79" />
      </head>
      <body className="font-sans bg-[#050505] text-[#F9F9F9] antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
