import { unstable_cache } from 'next/cache';

import { getPostsByUserId } from '@/actions/post';
import { auth } from '@/auth';
import { Dashboard, DashboardButton, DashboardHeader, DashboardTitle } from '@/components/dashboard-header';
import { EmptySection } from '@/components/empty-section';
import { PostCard } from '@/components/post-card';
import { PostsGrid } from '@/components/posts-grid';
import { Separator } from '@/components/ui/separator';
import type { User } from '@/types';

export default async function HomePage() {
  const session = await auth();

  const getCachedPost = unstable_cache(async () => getPostsByUserId(session), [session?.user?.id as string], {
    tags: [`posts:${session?.user?.id}`],
  });

  const results = await getCachedPost();
  const posts = 'error' in results.response ? [] : results.response.posts;

  return (
    <>
      <Dashboard>
        <DashboardHeader>
          <DashboardTitle>Your Blogs</DashboardTitle>
        </DashboardHeader>
        <DashboardButton href="/home/create/">Create new Blog</DashboardButton>
      </Dashboard>
      <Separator className="my-4" />
      {posts.length ? (
        <PostsGrid>
          {posts?.map(({ imageUrl, id, ...rest }) => (
            <PostCard
              key={id}
              id={id}
              button={{ text: 'Read more', link: `/post/${id}` }}
              image={imageUrl}
              {...rest}
              user={session?.user as User}
            />
          ))}
        </PostsGrid>
      ) : (
        <EmptySection />
      )}
    </>
  );
}
