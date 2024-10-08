import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { MainNav } from '@/components/ui/nav-menu';

import { CustomMDX } from '@/components/shared/mdx';
import { getPrivacyPolicy } from '../blog/utils';

export const metadata: Metadata = {
    title: 'Privary Policy',
    description: 'This page explains the Privacy Policy of the site.',
};

export default function Page() {
    let post = getPrivacyPolicy().find(
        (post) => post.slug === 'privacy-policy',
    );

    return (
        <Container>
            <MainNav />
            <article className="prose">
                <CustomMDX source={post?.content} />
            </article>
        </Container>
    );
}
