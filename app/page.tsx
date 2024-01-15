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
                        A D V
                      </h1>{" "}
                      <div className=" bg-gray-300 border  border-white text-gray-950 font-bold py-2 px-4 rounded-2xl h-auto">
                        Originals
                      </div>
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-gradient-to-b from-purple-600 via-purple-700 to-black/80">
                  <div className="h-auto py-12">
                    <DrawerHeader>
                      <div className="h-auto w-full bg-black rounded-3xl border-2 border-purple-400 flex flex-col">
                        <div className="h-auto w-full p-5 px-12 flex flex-col space-y-6">
                          <div className="h-auto w-full  flex justify-start space-x-4 items-center">
                          <img src="https://i.postimg.cc/QxH531Cx/avg.webp" className="pointer-events-none h-16 w-16 rounded-full border-2 border-purple-500" alt="" />
                          <h1 className="font-extrabold">Abhyudaya</h1>
                          <div className=" bg-gray-300 scale-75 border border-white text-gray-950 font-bold py-2 px-4 rounded-2xl h-auto">
                        Original
                      </div>
                          </div>
                          <div className="h-auto w-4/5 flex items-center justify-center">
                            <img src="/techs.png" className="  w-full h-auto rounded-2xl border border-purple-800" alt="" />
                          </div>
                        </div>
                      <div className="flex scale-75 flex-col overflow-y-clip overflow-x-clip justify-center text-center h-full my-1">
                        {/* <DrawerTitle className="font-bold">
                          {"ADVEdges"}
                        </DrawerTitle>
                        <br />
                        <Command className="bg-black border border-white/60 rounded-2xl">
                          <CommandInput placeholder="Search Suggestions and Features..." />
                          <CommandList>
                            <CommandGroup heading="Suggestions">
                              <div className="text-left">
                              <CommandItem>Page stuck? Scroll down like an ordinary Instagram Reel or Youtube Short.</CommandItem>
                              <CommandItem>Want to close the pop-up? Drag it down or click on the background.</CommandItem>
                                </div>
                            </CommandGroup>

                            <CommandSeparator />
    <CommandGroup heading="Features">
      <CommandItem>No iPhone? Use an iOS based UI app.</CommandItem>
      <CommandItem>Low end device? Use a blazing fast UI.</CommandItem>
    </CommandGroup>
                            
                          </CommandList>
                        </Command> */}
                      </div>
                      </div>
                    </DrawerHeader>

                    <DrawerFooter></DrawerFooter>
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
  );
}
