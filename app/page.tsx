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
      <main className="flex min-h-screen flex-col items-center justify-center overflow-y-clip overflow-x-clip">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full"
        >
          <CarouselContent className="-mt-1 h-[100vh] lg:h-[70vh] w-full">
            <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button variant={"link"}>
                    {" "}
                    <div className="flex items-center">
                      <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                        ADVEdges
                      </h1>{" "}
                      <div className=" bg-green-300 border border-green-500 text-green-950 font-bold py-2 px-4 rounded-2xl h-auto">
                        Updated
                      </div>
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="min-h-[70vh] h-auto">
                    <DrawerHeader>
                      <div className="flex flex-col overflow-y-clip overflow-x-clip justify-center text-center h-full my-10">
                        <DrawerTitle>
                          {"@adv.vapp is now ADVEdges!"}
                        </DrawerTitle>
                        <br />
                        <Command>
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
                        </Command>
                      </div>
                    </DrawerHeader>

                    <DrawerFooter></DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </CarouselItem>

            
            <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button variant={"link"}>
                    {" "}
                    <div className="flex items-center">
                      <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                        SA-B?
                      </h1>{" "}
                      <div className=" bg-green-300 border border-green-500 text-green-950 font-bold py-2 px-4 rounded-2xl h-auto">
                        Update 4, {"IMP"}
                      </div>
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="min-h-[70vh] h-auto">
                    <DrawerHeader>
                      <div className="flex flex-col justify-center px-4 text-center h-full my-10">
                        <DrawerDescription>14/01/24</DrawerDescription>
                        <br />
                        <DrawerTitle>{"These many views can't be yours alone"}</DrawerTitle>
                        <DrawerDescription>
                          I guess, {"there's stalkers, I mean, if just our classmates are listening/reading our texts then it's alright"}
                        </DrawerDescription>
                        <br />
                        <DrawerDescription>
                          {
                            "but, the repeated views count upto 4,851 in last 24 hours, I hope you didn't leaked my webApp."
                          }
                        </DrawerDescription>
                        <br/>
                        <DrawerDescription>{"This is not a DDoS either, it's too small. Looks like some people are interested in knowing our conversations, SA-B, apart from our classmates."}</DrawerDescription>
                         <br/>
                        <DrawerDescription>
                          {
                            "No worries, this time we meet IRL, I'll hand over a unique code of 8 letters (share it with your classmates only), for our private conversation, and the path goes like"
                          }
                        </DrawerDescription>
                        
                        <DrawerTitle>{"https://advwastaken.vercel.app/<random>/"}</DrawerTitle>
                        
                      </div>
                    </DrawerHeader>

                    <DrawerFooter></DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </CarouselItem>

            <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button variant={"link"}>
                    <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                      ADVNote
                    </h1>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="min-h-[70vh] h-auto">
                    <DrawerHeader>
                      <div className="flex flex-col justify-center text-center h-full my-10">
                        <DrawerTitle>
                          Alright, so a boom of Publised notes!
                        </DrawerTitle>
                        <br />
                        <DrawerDescription>
                          Straight from 27 to 81 in 5 days.
                        </DrawerDescription>
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
