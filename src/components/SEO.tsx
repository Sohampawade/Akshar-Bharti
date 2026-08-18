import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
}

export default function SEO({ 
  title = "Akshar Bharati | Tree Buddy Urban Forests",
  description = "Explore the trees, people and communities growing through Akshar Bharati's Tree Buddy Urban Forest initiative.",
  type = "website"
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
