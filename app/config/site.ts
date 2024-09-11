type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        vkontakte: string;
        github: string;
    };
};

export const siteConfig: SiteConfig = {
    name: 'Coding Como Blog',
    description:
        'An Open source Technical Blog platform with Next.js 14 with shadcn/ui, prisma and markdown support',
    url: 'https://next-blog-ay.vercel.app/',
    ogImage: 'https://next-blog-ay.vercel.app/og',
    links: {
        vkontakte: 'https://vk.com/id615720527',
        github: 'https://github.com/AlexeyYakovec',
    },
};
