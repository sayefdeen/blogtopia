import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const NavigationAuth = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href="/login" passHref>
            <Icons.profile className="size-6 cursor-pointer" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Login/Register</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
