import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Give',
  description:
    'Support the ministry and mission of Spirit Fountain Global Church through giving.',
}

export default function GiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}