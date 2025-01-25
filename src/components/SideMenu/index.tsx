"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TabsMenu } from "./routes";
import { Button } from "../ui/button";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

export const SideMenu = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const router = useRouter();

  const handleTabClick = (path: string, name: string) => {
    setSelectedTab(name);
    setTimeout(() => {
      router.push(path);
    }, 0);
  };
  return (
    <div className="flex h-full flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="flex items-center border-b w-full justify-center p-2 border-gray-200 dark:border-gray-800">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="cursor-pointer fill-none"
          onClick={() => router.push("/")}
        />
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-2">
          {TabsMenu.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() =>
                handleTabClick(`/${item.name.toLowerCase()}`, item.name)
              }
              className={cn(
                "w-full justify-start text-sm font-medium transition-colors",
                selectedTab === item.name
                  ? "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              )}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
};
