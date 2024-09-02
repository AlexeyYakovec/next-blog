"use client";

import { cn, fetchUrl } from "@/lib/utils";

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
      postData();
   }, [category, slug, title]);

   return <div></div>;
};
