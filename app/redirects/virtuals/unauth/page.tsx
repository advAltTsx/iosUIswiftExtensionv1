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
        {/* <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full "
        >
            <CarouselContent className="-mt-1 h-[100vh]  bg-right-bottom lg:h-[70vh] w-full">
            <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild> */}
                  <Button className="p-4" variant={"ghost"}>
                    {" "}
                    <div className="flex items-center">
                      <h1 className="scroll-m-30 p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                        not auth as
                      </h1>{" "}
                      <div className=" bg-gray-300 border  border-white text-gray-950 font-bold py-2 px-4 rounded-2xl h-auto">
                        {"virtuals"}
                      </div>
                    </div>
                  </Button> {/*
                </DrawerTrigger>
                <DrawerContent className="bg-black">
                  <div className="h-auto py-32">
                    <DrawerHeader>
                      <DrawerTitle>Alright, I also love you</DrawerTitle>
                      <br/>
                      <DrawerDescription>But, what the hell are you saying? I love you from my heart, we are and will always be best friends but anything more than that is not suitable, you understand? You ruined my expectations by saying to m you. I am just 18 afterall.</DrawerDescription>
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

                        
