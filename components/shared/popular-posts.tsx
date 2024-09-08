'use client';

// import { popularPosts } from "../../lib/placeholder-data";
import { cn, fetchUrl, fetcher } from '@/lib/utils';
import React from 'react';
import { Icons } from '../ui';
import useSWR from 'swr';
import Link from 'next/link';
import { PopularPostsSkeleton } from './popular-posts-skeleton';

interface Props {
    className?: string;
}

export const PopularPosts: React.FC<Props> = ({ className }) => {
    const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

    if (error) return <div>Failed to to load</div>;
    if (isLoading) return <PopularPostsSkeleton />;

    return (
        <ul className={cn('overflow-auto ', className)}>
            {data?.map(
                (post: { category: string; slug: string; title: string }) => {
                    return (
                        <Link
                            href={`/blog/${post.category}/${post.slug}`}
                            key={post.slug}>
                            <li
                                key={post.title}
                                className="flex items-center gap-2 cursor-pointer py-2 group hover:opacity-60 transition-all">
                                <Icons.arrowRigth className="h-6 w-6 group-hover:translate-x-1 transition-all" />
                                <p>{post.title}</p>
                            </li>
                        </Link>
                    );
                },
            )}
        </ul>
    );
};
