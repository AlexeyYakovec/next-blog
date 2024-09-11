import { notFound } from 'next/navigation';
import { formatDate, getBlogPosts } from '../../utils';
import { Container, Header } from '@/components/ui';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { BreadcrumbWithCustomSeparator } from '@/components/shared/breadcrumb';
import { CustomMDX } from '@/components/shared/mdx';
import { ReportView } from '@/components/ui/report-view';
import { baseUrl } from '@/app/sitemap';

export async function generateStaticParams() {
    let posts = getBlogPosts();

    return posts.map((post) => {
        slug: post.slug;
    });
}

export function generateMetadata({
    params,
}: {
    params: { slug: string; category: string };
}) {
    let post = getBlogPosts().find((post) => post.slug === params.slug);
    console.log(post?.metadata);

    if (!post) {
        return;
    }

    let {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata;

    let ogImage = image
        ? image
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${baseUrl}/blog/${post?.metadata.category}/${post?.slug}}`,
            images: [{ url: ogImage }],
        },
    };
}

interface PageProps {
    params: {
        category: string;
        slug: string;
    };
}

export default function Page({ params }: PageProps) {
    let post = getBlogPosts().find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <ReportView
                category={post.metadata.category}
                title={post.metadata.title}
                slug={post.slug}
            />
            <Header>
                <Container>
                    <BreadcrumbWithCustomSeparator
                        category={post.metadata.category}
                        slug={post.slug}
                    />
                    <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
                        {post.metadata.title}
                    </h1>

                    <div className="flex justify-between items-center mt-2 mb-4 text-sm">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                            {formatDate(post.metadata.publishedAt)}
                        </p>
                    </div>
                </Container>
            </Header>

            <Container>
                <article className="prose">
                    <CustomMDX source={post.content} />
                </article>
            </Container>
        </>
    );
}
