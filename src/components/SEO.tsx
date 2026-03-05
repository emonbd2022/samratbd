import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export function SEO({ title, description, keywords }: SEOProps) {
  return (
    <Helmet>
      <title>{title} | Afsar Uddin Chemical Co.</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={`${title} | Afsar Uddin Chemical Co.`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Afsar Uddin Chemical Co.`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
