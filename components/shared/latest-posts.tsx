import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
   className?: string;
}

export const LatestPosts: React.FC<Props> = ({ className }) => {
   let latestPosts = getBlogPosts();

   return (
      <>
         <h1>Recently Published</h1>
         {latestPosts
            .sort((a, b) => {
               if (new Date(a.metadata.publishedAt)) {
                  return -1;
               }
               return 1;
            })
            .map((post) => (
               <article key={post.slug} className="text-wrap max-w-md my-10">
                  <Link href={"#"}>
                     <h3 className="font-bold py-2 leading-5 hover:text-blue-400">
                        {post.metadata.title}
                     </h3>
                  </Link>
                  <p className="leading-5 my-5"> {post.metadata.summary}</p>
                  <p className="text-sm text-muted-foreground">
                     {formatDate(post.metadata.publishedAt)}
                  </p>
               </article>
            ))}
      </>
   );
};
