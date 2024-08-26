import { cn } from "@/lib/utils";
import React from "react";

import { Button } from "../ui";
import Link from "next/link";
import { POSTS } from "@/lib/constants";

interface Props {
   className?: string;
}

export const TopCategories: React.FC<Props> = ({ className }) => {
   return (
      <div
         className={cn(
            "grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2",
            className
         )}
      >
         {POSTS.map((post) => {
            return (
               <Button
                  key={post.title}
                  variant={"secondary"}
                  className="hover:scale-105 transition-all"
                  asChild
               >
                  <Link href={post.href}>{post.title}</Link>
               </Button>
            );
         })}
      </div>
   );
};
