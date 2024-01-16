import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen bg-black bg-[url('/bg.png')] bg-auto flex-col items-center justify-center overflow-y-clip overflow-x-clip">
          <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full "
        >
          <CarouselContent className="-mt-1 h-[100vh]  bg-right-bottom lg:h-[70vh] w-full">
            <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button className="p-4" variant={"link"}>
                    {" "}
                    <div className="flex items-center">
                      <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                        SA-B
                      </h1>{" "}
                      <div className=" bg-gray-300 border  border-white text-gray-950 font-bold py-2 px-4 rounded-2xl h-auto">
                        {"Updated 01/16/24"}
                      </div>
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-black">
                  <div className="h-auto py-32">
                    <DrawerHeader>
                     <DrawerDescription>1:31, I came home early</DrawerDescription>
                      <DrawerTitle>I know what {"you're"} thinking</DrawerTitle>
                      <br/>
                      <DrawerDescription>{"I don't know why but I had the urge to look cool infront of you by talking to a non-boy (they've talked to me earlier so I can talk back, it's a restriction from my parents that I cannot talk to a <g> first, neither type their name), still I thought of being cool but it backfired me 💀, they called me a `pagal`. Yes, infact, only 14 classified people from my class know about me excluding them." }</DrawerDescription>
                   <br/>
                      <DrawerDescription>{"I wanted to show I *can* talk to <g>s, but expectedly a nightmare happened infront of a respectable person 💀 in the most unexpected way, and further after regretting and blaming my own actions, I came back to talk but you were on the way to your classroom. First time I talked intentionally to a <g> irl, for someone else, and I have the worst luck ever"}</DrawerDescription>
                    </DrawerHeader>

                    <DrawerFooter></DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </CarouselItem>

            

                        

             
            
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
      </main>
    </>
  );
}
