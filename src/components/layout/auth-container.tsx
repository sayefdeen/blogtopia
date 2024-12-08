import React, { type PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type CenteredBox = {
  className?: string;
} & PropsWithChildren;

export default function AuthContainer({ children, className }: CenteredBox) {
  return <div className={cn('flex h-screen w-full items-center justify-center', className)}>{children}</div>;
}
