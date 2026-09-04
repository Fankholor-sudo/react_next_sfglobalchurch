import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Discover upcoming services, conferences, worship nights and other events at Spirit Fountain Global Church in Pretoria.',
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}