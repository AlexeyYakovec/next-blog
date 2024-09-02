import { cn } from "@/lib/utils";
import React from "react";

interface Props {
   children: React.ReactNode;
   className?: string;
}

export const Header: React.FC<Props> = ({ className, children }) => {
   return (
      <div className={cn("bg-gray-100 p-8 dark:bg-gray-800 ", className)}>
         {children}
      </div>
   );
};
