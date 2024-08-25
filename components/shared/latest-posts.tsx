import { getBlogPosts } from "@/app/blog/utils";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
   className?: string;
}

export const LatestPosts: React.FC<Props> = ({ className }) => {
   let latestPosts = getBlogPosts();

   return (
      <div className={cn("", className)}>
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
                  {post.metadata.title}
               </article>
            ))}
      </div>
   );
};
