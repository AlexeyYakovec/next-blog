import { cn } from "@/lib/utils";
import React from "react";
import { categories } from "@/lib/placeholder-data";
import { Button } from "../ui";
import Link from "next/link";

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
         {categories.map((category) => {
            return (
               <Button
                  key={category}
                  variant={"secondary"}
                  className="hover:scale-105 transition-all"
                  asChild
               >
                  <Link href={`/blog/${category}`}>{category}</Link>
               </Button>
            );
         })}
      </div>
   );
};
