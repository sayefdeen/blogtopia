import Link from 'next/link';
import React from 'react';

import { Byline } from '@/components/byline';
import { LazyImage } from '@/components/lazy-image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { PostCardProps } from '@/types';

export const PostCard = ({ title, description, button, image, user, showReadMore = false, id }: PostCardProps) => {
  const CardContentElement = (
    <Card className="relative mx-auto flex w-full flex-col shadow-custom-light transition-all duration-300 hover:scale-90">
      <CardHeader className="relative mb-4 p-0">
        <LazyImage width={458} height={254} className="h-[254px] rounded-t-md" src={image} alt={title} />
      </CardHeader>
      <CardContent className="flex h-full flex-col items-start">
        <CardTitle className="line-clamp-2 text-2xl">{title}</CardTitle>
        {user?.name && <Byline className="mb-2" authorName={user.name} />}
        <CardDescription className="mb-2 line-clamp-2">{description}</CardDescription>
        {showReadMore && (
          <Link className="self-end text-primary underline" href={button.link}>
            {button.text}
          </Link>
        )}
      </CardContent>
    </Card>
  );

  return showReadMore ? (
    CardContentElement
  ) : (
    <Link href={`/post/${id}`} className="block">
      {CardContentElement}
    </Link>
  );
};
