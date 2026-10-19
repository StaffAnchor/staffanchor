import type { Metadata } from 'next';
import ServicePage from '@/components/services/ServicePage';
import { servicePages } from '@/data/servicePages';

const config = servicePages['sales-hiring-advisory'];

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  openGraph: { title: config.seo.title, description: config.seo.description, url: 'https://www.staffanchor.com/employers/sales-hiring-advisory', images: [{ url: '/og-home.png', width: 1200, height: 630, alt: 'StaffAnchor Talent Solutions' }] },
  alternates: { canonical: 'https://www.staffanchor.com/employers/sales-hiring-advisory' },
};

export default function Page() {
  return <ServicePage config={config} />;
}
