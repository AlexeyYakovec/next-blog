import { cn } from "@/lib/utils";
import React from "react";
import { popularPosts } from "../../lib/placeholder-data";
import { Icons } from "../ui";

interface Props {
   className?: string;
}

export const PopularPosts: React.FC<Props> = ({ className }) => {
   return (
      <ul className={cn("overflow-auto ", className)}>
         {popularPosts.map((post) => {
            return (
               <li
                  key={post.title}
                  className="flex items-center gap-2 cursor-pointer py-2 group hover:opacity-60 transition-all"
               >
                  <Icons.arrowRigth className="h-6 w-6 group-hover:translate-x-1 transition-all" />
                  <p>{post.title}</p>
               </li>
            );
         })}
      </ul>
   );
};
