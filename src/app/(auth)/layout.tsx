import { Header } from '@/components/header';
import AuthContainer from '@/components/layout/auth-container';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <AuthContainer>{children}</AuthContainer>
    </>
  );
}
