'use client';

import React from 'react';

import { deletePost } from '@/actions/post';
import ConfirmDialog from '@/components/confirm-dialog';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DeleteIndicatorProps {
  userId: string;
  postId: string;
  className?: string;
}

export const DeleteIndicator = ({ userId, postId, className }: DeleteIndicatorProps) => {
  return (
    <ConfirmDialog onConfirm={() => deletePost(postId, userId)}>
      <Button
        asChild
        size="icon"
        variant="outline"
        className={cn('cursor-pointer rounded-full bg-muted shadow-lg', className)}
      >
        <span>
          <Icons.trash className="size-7 text-red-600" />
        </span>
      </Button>
    </ConfirmDialog>
  );
};
