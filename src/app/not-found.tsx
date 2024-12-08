import Link from 'next/link';

import { Header } from '@/components/header';
import { CenteredContent } from '@/components/layout/centered-content';
import { NotFoundAnimation } from '@/components/not-found-animations';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <>
      <Header />
      <CenteredContent className="text-center">
        <div className="space-y-2">
          <NotFoundAnimation />
          <Button asChild>
            <Link href="/">Go back to home page</Link>
          </Button>
        </div>
      </CenteredContent>
    </>
  );
}
