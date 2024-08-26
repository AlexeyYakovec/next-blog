import { cn } from "@/lib/utils";
import React from "react";

interface Props {
   className?: string;
   title: string;
}

export const Title: React.FC<Props> = ({ className, title }) => {
   return <h1 className={cn("font-bold mb-4", className)}>{title}</h1>;
};
