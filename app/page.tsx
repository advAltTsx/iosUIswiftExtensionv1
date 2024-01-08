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
      SA-B?
    </h1></Button>
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
           
              <DrawerTitle>I often get mocked, telling I dont have enough followers</DrawerTitle>
             <br/>
              <DrawerDescription>first off, my discord friends hate instagram, actually we are on another platform made by us (dont worry ill call ya)</DrawerDescription>
            <DrawerDescription>{"second up, I ask to the mockers you talk to non-boys? Basically everyone that been asked said 'yes', further I reply you're not even close, anyways SA-B droppin into my followers list?"}</DrawerDescription>
            <br />
          <DrawerDescription>Also, hows this ios-ui lookin?</DrawerDescription>
          <DrawerDescription>Azure Blue, developer @Pagani rated 8/10, also commented, this transition smoother than our life yo</DrawerDescription>
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
    <div className="flex items-center justify-center text-center p-6">{"Views: 491K+"}</div>
    </>
      )
}
    
