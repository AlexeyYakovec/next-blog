import { cn, fetchUrl, fetcher } from "@/lib/utils";
import React from "react";
import { popularPosts } from "../../lib/placeholder-data";
import { Icons } from "../ui";
import useSWR from "swr";
import Link from "next/link";
import { Key } from "lucide-react";

interface Props {
   className?: string;
}

export const PopularPosts: React.FC<Props> = ({ className }) => {
   const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
   console.log(data);

   if (error) return <div>Failed to to load</div>;
   if (isLoading) return <div>Loading...</div>;

   return (
      <ul className={cn("overflow-auto ", className)}>
         {data?.map(
            (post: { category: string; slug: string; title: string }) => {
               return (
                  <Link
                     href={`/blog/${post.category}/${post.slug}`}
                     key={post.slug}
                  >
                     <li
                        key={post.title}
                        className="flex items-center gap-2 cursor-pointer py-2 group hover:opacity-60 transition-all"
                     >
                        <Icons.arrowRigth className="h-6 w-6 group-hover:translate-x-1 transition-all" />
                        <p>{post.title}</p>
                     </li>
                  </Link>
               );
            }
         )}
      </ul>
   );
};
