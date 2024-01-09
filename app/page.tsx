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
        <Button variant={'link'}> <div className='flex items-center'><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      SA-B?
    </h1> <div className=' bg-pink-400 border border-pink-600 py-2 px-4 rounded-2xl h-auto text-pink-950'>Updated</div></div></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="min-h-[70vh] h-auto">
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
            <DrawerDescription>SugarByte/Sugar text was not for you. You are always welcomed. I am angry on them so I am gonna be fighting. After a couple of days even they know I will be welcoming them once again like I always do.</DrawerDescription>
              <br/>
            <br />
            <DrawerDescription>9/1/24</DrawerDescription>
              <br/>
              <DrawerTitle>{'"Humko aise bolta hai?'} tum toh <Link href={'https://i.pngimg.me/thumb/f/720/m2i8H7H7Z5K9d3A0.jpg'}> 
              <span className='underline text-blue-600 font-medium'>aisa</span> </Link>{' dikhta hai"'}</DrawerTitle>
              <br/>
              <DrawerDescription>M sirf mazak karha tha 🥲</DrawerDescription>
              <DrawerDescription>{'"Vaise hum..."'}</DrawerDescription>
              <DrawerDescription> *sighs*</DrawerDescription>
              <DrawerDescription>{'"... mazak nahi kiye"'}</DrawerDescription>
              <DrawerDescription>😨😞😔🥲😭 <span className="opacity-50">(edited)</span></DrawerDescription>
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
    
