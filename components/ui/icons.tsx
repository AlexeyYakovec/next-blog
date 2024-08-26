import {
   Rss,
   Command,
   ArrowRight,
   Github,
   type Icon as LucidIcon,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";

export type Icon = typeof LucidIcon;

export const Icons = {
   logo: Command,
   rss: Rss,
   arrowRigth: ArrowRight,
   github: FaGithub,
   vkontakte: FaVk,
};
