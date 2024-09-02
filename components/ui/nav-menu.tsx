"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { POSTS } from "@/lib/constants";

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

export function MainNav() {
   return (
      <div
         className={cn(
            "flex flex-col items-start gap-5 justify-start md:flex-row md:items-center md:justify-between pt-10 z-50"
         )}
      >
         <Link href={"/"}>
            <div className="flex items-center justify-between w-36 gap-2">
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
                        {POSTS.map((component) => (
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
