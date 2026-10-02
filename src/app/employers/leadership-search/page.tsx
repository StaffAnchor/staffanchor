import type { Metadata } from 'next';
import ServicePage from '@/components/services/ServicePage';
import { servicePages } from '@/data/servicePages';

const config = servicePages['leadership-search'];

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  openGraph: { title: config.seo.title, description: config.seo.description, url: 'https://www.staffanchor.com/employers/leadership-search' },
  alternates: { canonical: 'https://www.staffanchor.com/employers/leadership-search' },
};

export default function Page() {
  return <ServicePage config={config} />;
}
