"use client";
import {HeroUIProvider} from "@heroui/react";

import {Button, ButtonGroup} from "@heroui/button";
import Emoji from "../components/Emoji";

export default function Home() {


  return (
    <HeroUIProvider>
    <div className="flex flex-col items-center justify-center gap-4 p-4 min-h-screen">

      <Emoji />

    </div>
  </HeroUIProvider>
  );
}
