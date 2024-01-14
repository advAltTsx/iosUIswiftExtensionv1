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
          <CarouselContent className="-mt-1 h-[100vh] w-full">
            <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button variant={"link"}>
                    {" "}
                    <div className="flex items-center">
                      <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                        ADVEdges
                      </h1>{" "}
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="min-h-[70vh] h-auto">
                    <DrawerHeader>
                      <div className="flex flex-col px-4 justify-center text-center h-full my-10">
                        <DrawerTitle>
                          {"@adv.vapp is now ADVEdges!"}
                        </DrawerTitle>
                        <br />
                        <Command>
                          <CommandInput placeholder="Search Suggestions and Features..." />
                          <CommandList>
                            <CommandGroup heading="Suggestions">
                              <CommandItem>Page stuck? Scroll down like an ordinary Instagram reel or Youtube Short.</CommandItem>
                              <CommandItem>Want to close the pop-up? Drag it down or click on the background.</CommandItem>
                            </CommandGroup>

                            <CommandSeparator />
    <CommandGroup heading="Features">
      <CommandItem>No iPhone? Use a iOS based UI app.</CommandItem>
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
                        Update 2
                      </div>
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="min-h-[70vh] h-auto">
                    <DrawerHeader>
                      <div className="flex flex-col justify-center text-center h-full my-10">
                        <DrawerDescription>14/01/24</DrawerDescription>
                        <br />
                        <DrawerTitle>{"Remember?"}</DrawerTitle>
                        <DrawerDescription>
                          I told you to be a boxer.
                        </DrawerDescription>
                        <br />
                        <DrawerDescription>
                          {
                            "So, you've got to do 3000 push-ups, not modified one, actual one, keep practising, stay strong 💪"
                          }
                        </DrawerDescription>
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
