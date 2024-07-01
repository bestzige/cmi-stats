"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSkinUrl } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const HomePage = () => {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheck = () => {
    const username = inputRef.current?.value;

    if (!username) return;

    router.push(`/stats/${username}`);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Welcome to Stats Checker!
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src={`${getSkinUrl()}/full/512/BestZige`}
          alt='Minecraft Avatar'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className='flex justify-center mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl'>
        <div className='flex w-full max-w-sm items-center space-x-2'>
          <Input type='text' placeholder='Username or UUID' ref={inputRef} />
          <Button onClick={handleCheck}>Check</Button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
