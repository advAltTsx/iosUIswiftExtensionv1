import Image from 'next/image'
import Link from 'next/link'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[50vh]">
          <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
            <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant={'link'}><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      My loveliest sister?
    </h1></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="min-h-[70vh] h-auto px-6">
          <DrawerHeader >
            <div className='h-auto w-full flex items-center justify-start'>
            <DrawerClose asChild>
              <Button variant="ghost"><h1 className=' text-blue-600'>Close</h1></Button>
            </DrawerClose>
            </div>
            <div className='flex flex-col justify-center text-center h-full my-10'>
           <DrawerDescription>8/1/24</DrawerDescription>
              <br/>
              <DrawerTitle>I also have to make new friends like you</DrawerTitle>
             <br/>
              <DrawerDescription>The way these years passed, you are not being my friend neither letting me make new friends. Whenever I try talking to someone you just go acting different.</DrawerDescription>
            <DrawerDescription>{"I'm not angry on you, even a bit. But still, stay safe and be healthy. You made new cool friends. I'm not cool, just an ordinary person, tell them to put your name into their workarts. I saw who gave actual attention to me when I mentioned the word 'die'. You're not welcomed in any of my works anymore. I hope you maintain your self-esteem and dignity by not showing yourself here. Scroll through their cool looking pics on Instagram instead."} </DrawerDescription>
            <br />
          </div>
          </DrawerHeader>
          
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
            </CarouselItem>
        
        
        
        
        <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
            <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant={'link'}><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      SA-B?
    </h1></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="min-h-[70vh] h-auto px-6">
          <DrawerHeader >
            <div className='h-auto w-full flex items-center justify-start'>
            <DrawerClose asChild>
              <Button variant="ghost"><h1 className=' text-blue-600'>Close</h1></Button>
            </DrawerClose>
            </div>
            <div className='flex flex-col justify-center text-center h-full my-10'>
           <DrawerDescription>8/1/24</DrawerDescription>
              <br/>
              <DrawerTitle>You should smile</DrawerTitle>
             <br/>
              <DrawerDescription>Your smile is something precious, the way you smiled that day even I could not resist smiling back</DrawerDescription>
            <DrawerDescription>{"You look so cute, just like"} <Link href={'https://w0.peakpx.com/wallpaper/26/103/HD-wallpaper-monkey-selfie-face-thumbnail.jpg'}> <span className='underline text-blue-600 font-medium'>this</span></Link> 💀</DrawerDescription>
            <br />
          </div>
          </DrawerHeader>
          
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>

          </CarouselItem>


          <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
            <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant={'link'}><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      ADVNote
    </h1></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="min-h-[70vh] h-auto px-6">
          <DrawerHeader >
            <div className='h-auto w-full flex items-center justify-start'>
            <DrawerClose asChild>
              <Button variant="ghost"><h1 className=' text-blue-600'>Close</h1></Button>
            </DrawerClose>
            </div>
            <div className='flex flex-col justify-center text-center h-full my-10'>
           <DrawerDescription>8/1/24</DrawerDescription>
              <br/>
              <DrawerTitle>You know there are way too many dummies and stalkers than actual users.</DrawerTitle>
             <br/>
              <DrawerDescription>Its Clerk bud. Their privacy policy. Not mine.</DrawerDescription>
         <br/>
              <DrawerDescription>Also, the new feature @advwastaken.vercel.app, {"don't"} use arrows like a kid, scroll right away like an insta reel, yt short instead. It took time to build with framer motion, gotta flex 💪</DrawerDescription>
     <br/>
              <DrawerDescription>I know ROG Phone is far better, but still, I like iOS UI.</DrawerDescription>
     
            </div>
          </DrawerHeader>
          
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>

          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      
      
      

      
    </main>
    </>
      )
}
    
