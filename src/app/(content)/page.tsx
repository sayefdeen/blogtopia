import { unstable_cache } from 'next/cache';

import { getPosts } from '@/actions/post';
import { EmptySection } from '@/components/empty-section';
import { Hero } from '@/components/hero';
import { PostCard } from '@/components/post-card';
import { PostsGrid } from '@/components/posts-grid';
import { Separator } from '@/components/ui/separator';

export default async function HomePage() {
  const getCachedPost = unstable_cache(async () => getPosts(), ['published-posts'], { tags: ['posts'] });
  const results = await getCachedPost();

  const posts = 'error' in results.response ? [] : results.response.posts;

  return (
    <>
      <Hero />
      <Separator className="my-6" />
      {posts.length ? (
        <PostsGrid>
          {posts?.map(({ imageUrl, ...rest }) => (
            <PostCard
              key={rest.id}
              button={{ text: 'Read more', link: `/post/${rest.id}` }}
              image={imageUrl}
              {...rest}
              showReadMore
            />
          ))}
        </PostsGrid>
      ) : (
        <EmptySection />
      )}
    </>
  );
}
