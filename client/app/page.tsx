
"use client";
import { HeroUIProvider } from "@heroui/react";
import {  SignUp } from "@/components";


export default function Home() {
  return (
    <HeroUIProvider>
      <div className="min-h-screen max-h-screen">
        {/* <Messages />
      <Inputs /> */}
        <SignUp />
      </div>
    </HeroUIProvider>
  );
}
