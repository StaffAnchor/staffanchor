import type { Metadata } from 'next';
import ServicePage from '@/components/services/ServicePage';
import { servicePages } from '@/data/servicePages';

const config = servicePages['permanent-hiring'];

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  openGraph: { title: config.seo.title, description: config.seo.description, url: 'https://www.staffanchor.com/employers/permanent-hiring' },
  alternates: { canonical: 'https://www.staffanchor.com/employers/permanent-hiring' },
};

export default function Page() {
  return <ServicePage config={config} />;
}
