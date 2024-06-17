'use client'

import { Loader2 } from "lucide-react";
import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import {HeaderLogo} from '@/components/header-logo'
import { Navigation } from '@/components/navigation'
import { WelcomeMsg } from '@/components/welcome-msg'
import Filters from './filters'

export const Header = () => {
  
  return (
    <header 
    className='bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36 '
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <div className="space-y-6 text-center  text-white/90">
          <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="size-6 text-muted-foreground animate-spin" />
        </ClerkLoading>
          </div>
            {/* <Loader2 className="size-8 animate-spin text-slate-400" /> */}
        </div>
        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  )
}