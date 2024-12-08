import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { Icons } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const NavigationUser = () => {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{session?.user?.name?.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="line-clamp-2 text-sm font-medium leading-none">{session?.user?.name}</p>
            <p className="truncate text-xs leading-none text-muted-foreground">{session?.user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/home/" className="flex w-full items-center gap-2">
              <Icons.dashboard className="h-4 w-4" />
              Home
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut({ redirectTo: '/login' })}>
          <button className="flex items-center gap-2">
            <Icons.logout className="h-4 w-4" />
            <span>Log out</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
