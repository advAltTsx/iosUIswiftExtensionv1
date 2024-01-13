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
    <main className="flex min-h-screen flex-col items-center justify-center overflow-y-clip overflow-x-clip">
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full"
    >
      <CarouselContent className="-mt-1 h-[100vh] w-full">
        <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
            <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant={'link'}> <div className='flex items-center'><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      ADVEdges
    </h1> </div></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="min-h-[70vh] h-auto">
          <DrawerHeader >
            
            <div className='flex flex-col px-4 justify-center text-center h-full my-10'>
              <DrawerDescription>While others are scrolling Instagram Reels, and Youtube Shorts,</DrawerDescription>
              <br/>
              <DrawerDescription>I decided not to open these apps ever again, </DrawerDescription>
              <DrawerDescription>and {"that's why,"}</DrawerDescription>
             <br/>
              <DrawerTitle>{"@adv.vapp is now ADVEdges!"}</DrawerTitle>
              
            <DrawerDescription>Scroll till the end like the other equivalents.</DrawerDescription>
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
        <Button variant={'link'}> <div className='flex items-center'><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      SA-A?
    </h1> <div className=' bg-green-300 border border-green-500 text-green-950 font-bold py-2 px-4 rounded-2xl h-auto'>New</div></div></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="min-h-[70vh] h-auto">
          <DrawerHeader >
            
            <div className='flex flex-col justify-center text-center h-full my-10'>
            <DrawerDescription>13/01/24</DrawerDescription>
              <br/>
              <DrawerTitle>{"Hi there!"}</DrawerTitle>
  
            <DrawerDescription>
                <span className="opacity-50"> jeez yes, your classmate Abhyudaya Deep Verma!</span></DrawerDescription>
            <br/>
              <DrawerDescription>{"I know you wouldn't be believing it's mine, but it's true!"}</DrawerDescription>
      
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
        <Button variant={'link'}> <div className='flex items-center'><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      SA-B?
    </h1> <div className=' bg-green-300 border border-green-500 text-green-950 font-bold py-2 px-4 rounded-2xl h-auto'>Updated</div></div></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="min-h-[70vh] h-auto">
          <DrawerHeader >
            
            <div className='flex flex-col justify-center text-center h-full my-10'>
            <DrawerDescription>13/1/24</DrawerDescription>
              <br/>
              <DrawerTitle>{"So, how was your exam?"}</DrawerTitle>
  <br/>
          <DrawerDescription>{"Well, meet SA-A and their friends!"}</DrawerDescription>
              <DrawerDescription>
                <span className="opacity-50"> (you two have the same surname, and they have your {"classmate's"} first name, co-incidence on {"it's"} peak) </span></DrawerDescription>
              
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
        <div className="min-h-[70vh] h-auto">
          <DrawerHeader >
            
            <div className='flex flex-col justify-center text-center h-full my-10'>
           
              <DrawerTitle>Alright, so a boom of Publised notes!</DrawerTitle>
             <br/>
              <DrawerDescription>Straight from 27 to 81 in 5 days.</DrawerDescription>
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
    
