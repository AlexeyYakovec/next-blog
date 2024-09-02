import { cn } from "@/lib/utils";
import React from "react";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "../ui/card";
import { formatDate } from "@/app/blog/utils";

interface CardCategoryProps {
   title: string;
   summary: string;
   date: string;
   className?: string;
}

export const CardCategory: React.FC<CardCategoryProps> = ({
   title,
   summary,
   date,
   className,
}) => {
   return (
      <Card
         className={cn(
            "w-[350px] h-[290px] shadow-lg flex flex-col",
            className
         )}
      >
         <CardHeader>
            <CardTitle>{title}</CardTitle>
         </CardHeader>
         <CardContent className="flex-1">
            <p>{summary}</p>
         </CardContent>
         <CardFooter>
            <p className="text-xs">{formatDate(date)}</p>
         </CardFooter>
      </Card>
   );
};
