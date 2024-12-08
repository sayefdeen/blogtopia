import { Header } from '@/components/header';
import { Container } from '@/components/layout/container';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Container className="py-20">{children}</Container>
    </>
  );
}
