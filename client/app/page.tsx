"use client";
import {HeroUIProvider} from "@heroui/react";

import {Button, ButtonGroup} from "@heroui/button";


export default function Home() {
  return (
    <HeroUIProvider>
    <div className="flex flex-col items-center justify-center gap-4 p-4 min-h-screen">
      <h1 className="text-4xl font-bold">Made Room</h1>
      <Button color="primary">Button</Button>
      
    </div>
  </HeroUIProvider>
  );
}
