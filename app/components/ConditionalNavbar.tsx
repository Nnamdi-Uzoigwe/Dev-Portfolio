"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar"; // import the component normally

export default function ConditionalNavbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/projects")) return null;
  return <Navbar />; 
}
