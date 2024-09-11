'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Button, Icons, Input } from '.';
import Link from 'next/link';
import { POSTS } from '@/lib/constants';
import { createSubscriber } from '@/lib/actions';
import { useFormState } from 'react-dom';

interface Props {
    className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
    const initialState = { message: '', errors: {} };
    const [state, dispatch] = useFormState(createSubscriber, initialState);

    return (
        <footer
            className={cn('bg-gray-100 py-8 dark:bg-gray-800', className)}
            style={{ marginTop: 100 }}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Icons.logo className="h-6 w-6" />
                            <span className="text-md font-semibold">
                                Coding como
                            </span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Stay Up to Date with the latest news and insights
                            from out blog.
                        </p>
                        <div className="flex space-x-4 ">
                            <a
                                href="https://github.com/AlexeyYakovec"
                                target="_blank"
                                aria-label="Github"
                                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-all">
                                <Icons.github className="h-6 w-6" />
                            </a>
                            <a
                                href="https://vk.com/id615720527"
                                target="_blank"
                                aria-label="Github"
                                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-all">
                                <Icons.vkontakte className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-md font-semibold">Blog</h3>
                        <ul className="space-y-2 text-sm">
                            {POSTS.map((post) => {
                                return (
                                    <li key={post.title}>
                                        <Link
                                            href={post.href}
                                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-all">
                                            {post.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3>Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="mailto:alekseyyakovets@gmail.com"
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-all">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <Link
                                    href={'/terms-of-services'}
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-all">
                                    Terms of Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/privacy-policy'}
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-all">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/sitemap.xml'}
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-all">
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-md font-semibold">Newsletter</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Subscribe to our newsletter to stay up-to-date with
                            the latest news and updates.
                        </p>

                        <form action={dispatch}>
                            <div className="flex space-x-2">
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="flex-1"
                                    defaultValue=""
                                    aria-describedby="email-error"
                                />

                                <Button>Subscribe</Button>
                            </div>

                            <div
                                id="email-error"
                                aria-label="polite"
                                aria-atomic="true"
                                className="px-1 mt-4">
                                {state?.errors?.email &&
                                    state.errors.email.map((error: string) => {
                                        return (
                                            <p
                                                key={error}
                                                className="text-xs text-red-500">
                                                {error}
                                            </p>
                                        );
                                    })}
                                {!state?.errors?.email && (
                                    <p className="text-xs text-green-500">
                                        {state?.message}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-8 border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
                    &copy; 2024 Coding como. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
