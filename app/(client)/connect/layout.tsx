import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect',
  description:
    'Connect with Spirit Fountain Global Church and find ways to get involved in our church community in Pretoria.',
}

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}