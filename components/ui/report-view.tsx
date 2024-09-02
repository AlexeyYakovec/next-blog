"use client";

import { cn } from "@/lib/utils";

import React, { useEffect } from "react";

interface ReportViewProps {
   slug: string;
   title: string;
   category: string;
}

export const ReportView: React.FC<ReportViewProps> = ({
   slug,
   title,
   category,
}) => {
   useEffect(() => {
      const postData = async () => {
         try {
            await fetch(fetchUrl, {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  slug,
                  title,
                  category,
               }),
            });
         } catch (error) {
            console.log("Something is up...", error);
         }
      };
   }, []);

   return <div></div>;
};
