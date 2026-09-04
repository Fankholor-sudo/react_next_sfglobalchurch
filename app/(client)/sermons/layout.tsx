import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sermons',
  description:
    'Watch and listen to sermons from Spirit Fountain Global Church in Pretoria. Grow in faith through the Word of God.',
};

export default function SermonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}