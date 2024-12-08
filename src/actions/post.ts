'use server';

import 'use-server';

import { eq } from 'drizzle-orm';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import type { Session } from 'next-auth';

import { auth } from '@/auth';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { mockResponse } from '@/lib/utils';
import type { PostFormValues } from '@/types/zod-schema';

export const getPosts = async () => {
  try {
    const filteredPosts = await db.query.posts.findMany({
      with: {
        user: {
          columns: {
            id: true,
            name: true,
          },
        },
      },
    });

    return mockResponse({ posts: filteredPosts });
  } catch (error) {
    return mockResponse({
      error: true,
      title: 'Posts retrieval Failed!',
      message: 'Please try again later!',
    });
  }
};

export const getPostsByUserId = async (session: Session | null) => {
  try {
    if (!session?.user?.id) {
      throw new Error('Unauthorized user');
    }

    const userId = session.user.id;

    const postsByUserId = await db.query.posts.findMany({
      where: (posts, { eq }) => eq(posts.userId, userId),
    });

    return mockResponse({ posts: postsByUserId });
  } catch (error) {
    return mockResponse({
      error: true,
      title: 'Posts retrieval by author id Failed!',
      message: 'Please try again later!',
    });
  }
};

export const getPostById = async (session: Session | null, id: string) => {
  try {
    const post = await db.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
      with: {
        user: {
          columns: {
            name: true,
            id: true,
          },
        },
      },
    });

    return mockResponse({ post });
  } catch (error) {
    return mockResponse({
      error: true,
      title: 'Post retrieval Failed!',
      message: 'Please try again later!',
    });
  }
};

export const deletePost = async (id: string, userId?: string) => {
  try {
    const session = await auth();

    if (!session?.user?.id || session?.user?.id !== userId) {
      throw new Error('Unauthorized user');
    }

    await db.delete(posts).where(eq(posts.id, id));
  } catch (error) {
    return mockResponse({
      error: true,
      title: 'Post deletion Failed!',
      message: 'Please try again later!',
    });
  }

  revalidateTag(`posts`);
  revalidateTag(`posts:${userId}`);
  revalidatePath('/home');
  redirect('/home');
};

export const updatePost = async ({ id, title, description, imageUrl, content, userId }: PostFormValues) => {
  try {
    const session = await auth();
    const sessionUserId = session?.user?.id;

    if (!id || !sessionUserId || userId !== sessionUserId) {
      throw new Error('Unauthorized user');
    }

    await db
      .update(posts)
      .set({
        title,
        description,
        imageUrl,
        content,
      })
      .where(eq(posts.id, id));
  } catch (error) {
    return mockResponse({
      error: true,
      title: 'Post updating Failed!',
      message: 'Please try again later!',
    });
  }

  revalidateTag(`posts`);
  revalidateTag(`post:${id}`);
  revalidatePath('/home');
  redirect('/home');
};

export const createPost = async ({ title, description, imageUrl, content }: PostFormValues) => {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new Error('Unauthorized user');
    }

    const userId = session.user.id;

    await db.insert(posts).values({
      title,
      description,
      imageUrl,
      content,
      userId: userId,
    });

    revalidateTag(`posts:${userId}`);
  } catch (error) {
    return mockResponse({
      error: true,
      title: 'Post creation Failed!',
      message: 'Please try again later!',
    });
  }

  revalidateTag('posts');
  revalidatePath('/home');
  redirect('/home');
};
