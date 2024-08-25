"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "./icons";
import { ModeToggle } from "./mode-toggle";

const posts: { title: string; href: string; description: string }[] = [
   {
      title: "React",
      href: "/docs/blog/react",
      description:
         "Learn React.js and Next.js in a simple to understand articles",
   },
   {
      title: "Performance",
      href: "/docs/performance",
      description: "How to make your next app Blazing fast",
   },
   {
      title: "Career",
      href: "/docs/blog/career",
      description:
         "A popup that displays information related to an element when the element",
   },
];

export function MainNav() {
   return (
      <div
         className={cn(
            "flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between z-50 p-5"
         )}
      >
         <Link href={"/"} className="self-start">
            <div className="flex items-center justify-between w-32">
               <Icons.logo className="h-6 w-6 " />
               <p>Coding como</p>
            </div>
         </Link>

         <NavigationMenu>
            <NavigationMenuList>
               <NavigationMenuItem>
                  <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {posts.map((component) => (
                           <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                           >
                              {component.description}
                           </ListItem>
                        ))}
                     </ul>
                  </NavigationMenuContent>
               </NavigationMenuItem>
               <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                     <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                     >
                        About
                     </NavigationMenuLink>
                  </Link>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>

         <div className="flex items-center justify-between w-20">
            <ModeToggle />
            <Link href={"/rss"}>
               <Icons.rss className="h-6 w-6" />
            </Link>
         </div>
      </div>
   );
}

const ListItem = React.forwardRef<
   React.ElementRef<"a">,
   React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
   return (
      <li>
         <NavigationMenuLink asChild>
            <a
               ref={ref}
               className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  className
               )}
               {...props}
            >
               <div className="text-sm font-medium leading-none">{title}</div>
               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
               </p>
            </a>
         </NavigationMenuLink>
      </li>
   );
});
ListItem.displayName = "ListItem";
