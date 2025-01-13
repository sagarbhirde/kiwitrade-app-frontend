#!/bin/bash

# Exit on error
set -e

echo "🔨 Creating SEO and i18n components..."

# Create SEO component directory and file
mkdir -p src/components/seo
cat > src/components/seo/SEOHead.tsx << 'EOL'
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  schema?: Record<string, unknown>;
}

export const SEOHead = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  schema,
}: SEOProps): JSX.Element => {
  const baseUrl = import.meta.env.VITE_APP_URL || 'https://kiwitrade.com';
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={openGraph?.title || title} />
      <meta property="og:description" content={openGraph?.description || description} />
      {openGraph?.image && <meta property="og:image" content={openGraph.image} />}
      <meta property="og:url" content={openGraph?.url || canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitter?.card || 'summary_large_image'} />
      <meta name="twitter:title" content={twitter?.title || title} />
      <meta name="twitter:description" content={twitter?.description || description} />
      {twitter?.image && <meta name="twitter:image" content={twitter.image} />}

      {/* Schema.org */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
EOL

# Create i18n configuration
mkdir -p src/config
cat > src/config/i18n.ts << 'EOL'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

void i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/src/locales/{{lng}}/{{ns}}.json',
    },
    defaultNS: 'common',
    ns: ['common', 'home'],
  });

export default i18n;
EOL

# Create example HomePage component with SEO and i18n
mkdir -p src/components/features/HomePage
cat > src/components/features/HomePage/HomePage.tsx << 'EOL'
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo/SEOHead';

export const HomePage = (): JSX.Element => {
  const { t } = useTranslation();

  const seoData = {
    title: t('home.seo.title', 'KiwiTrade - Modern Trading Platform'),
    description: t('home.seo.description', 'Trade with confidence using KiwiTrade'),
    canonical: '/',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'KiwiTrade Home',
      description: 'Modern trading platform for serious traders',
    },
  };

  return (
    <>
      <SEOHead {...seoData} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{t('home.title', 'Welcome to KiwiTrade')}</h1>
        <p className="text-lg text-gray-600">
          {t('home.description', 'Start trading with our advanced platform')}
        </p>
      </main>
    </>
  );
};
EOL

# Create translation files
mkdir -p src/locales/{en,es}
cat > src/locales/en/home.json << 'EOL'
{
  "home": {
    "title": "Welcome to KiwiTrade",
    "description": "Start trading with our advanced platform",
    "seo": {
      "title": "KiwiTrade - Modern Trading Platform",
      "description": "Trade with confidence using KiwiTrade's advanced trading platform. Access real-time market data, advanced charting, and professional trading tools."
    }
  }
}
EOL

cat > src/locales/es/home.json << 'EOL'
{
  "home": {
    "title": "Bienvenido a KiwiTrade",
    "description": "Comienza a operar con nuestra plataforma avanzada",
    "seo": {
      "title": "KiwiTrade - Plataforma de Trading Moderna",
      "description": "Opera con confianza usando la plataforma de trading de KiwiTrade. Accede a datos de mercado en tiempo real, gráficos avanzados y herramientas de trading profesionales."
    }
  }
}
EOL

echo "✅ SEO and i18n components created successfully!"