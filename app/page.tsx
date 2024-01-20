"use client";

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

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <>
      <main
        className="flex min-h-screen bg-black bg-[url('/bg.gif')] bg-cover
   flex-col items-center justify-center overflow-y-clip overflow-x-clip"
      >
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
                      <div className=" bg-black border text-base font-extrabold text-white p-4 px-8 rounded-full h-auto">
                        Sugar
                      </div>
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-black">
                  <div className="h-auto py-24 px-5">
                    <DrawerHeader>
                      <DrawerTitle>{"Today at 20:30"}</DrawerTitle>
                      <DrawerDescription>Have phone by your side.</DrawerDescription>
                    </DrawerHeader>

                  </div>
                </DrawerContent>
              </Drawer>
            </CarouselItem>
            <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button className="p-4" variant={"link"}>
                    {" "}
                    <div className="flex items-center">
                      <div className=" bg-black border text-base font-extrabold text-white p-4 rounded-full h-auto">
                        500K, {"yumpossible"}
                      </div>
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-black">
                  <div className="h-auto py-24 px-5">
                    <DrawerHeader>
                      {/* <div className="h-auto w-full bg-black rounded-3xl border-2 border-purple-400 flex flex-col">
                        <div className="h-auto w-full p-5 px-12 flex flex-col space-y-6">
                          <div className="h-auto w-full  flex justify-start space-x-4 items-center">
                          <img src="/avg.jpg" className=" h-[4.5rem] w-16 rounded-3xl border-2 border-purple-500" alt="" />
                          <h1 className="font-extrabold">Abhyudaya</h1>
                          <div className=" bg-gray-300 scale-75 border border-white text-gray-950 font-bold py-2 px-4 rounded-2xl h-auto">
                        Original
                      </div>
                          </div>
                          <div className="h-auto w-full flex items-center justify-center">
                            <img src="/techs.png" className="  w-80 h-auto rounded-2xl border border-purple-800" alt="" />
                          </div>
                        </div>
                      <div className="flex scale-75 flex-col overflow-y-clip overflow-x-clip justify-center text-center h-full my-1">
                        <DrawerTitle className="font-bold">
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
                        </Command> 
                      </div>
                      </div> */}

                      <Menubar className="h-16">
                        <ResizablePanelGroup
                          direction="horizontal"
                          className="h-full w-full"
                        >
                          <ResizablePanel defaultSize={50}>
                            <div className="flex h-full w-full items-center justify-center">
                              <MenubarMenu>
                                <MenubarTrigger className="">
                                  <span className="underline text-md">
                                    Overview for new users
                                  </span>
                                </MenubarTrigger>
                                <MenubarContent>
                                  <MenubarItem>
                                    <Command className="bg-black">
                                      <div className="opacity-40">
                                        <CommandInput placeholder="Search Disabled" />
                                      </div>
                                      <CommandList>
                                        <CommandGroup heading="Suggestions">
                                          <div className="text-left">
                                            <CommandItem>
                                              <span>
                                                Page stuck?{" "}
                                                <span className="opacity-60">
                                                  <br /> Scroll down like
                                                  Youtube Shorts.
                                                </span>{" "}
                                              </span>
                                            </CommandItem>
                                            <CommandItem>
                                              <span>
                                                Want to close the pop-up?{" "}
                                                <span className="opacity-60">
                                                  <br /> Drag it down/click on
                                                  the background.
                                                </span>{" "}
                                              </span>
                                            </CommandItem>
                                            <CommandItem>
                                              <span>
                                                {"Can't see the overview?"}{" "}
                                                <span className="opacity-60">
                                                  <br /> Resize the panel for
                                                  adjustments.
                                                </span>{" "}
                                              </span>
                                            </CommandItem>
                                          </div>
                                        </CommandGroup>

                                        <CommandSeparator />
                                        <CommandGroup heading="Features">
                                          <CommandItem>
                                            <span>
                                              {"No iPhone?"}{" "}
                                              <span className="opacity-60">
                                                <br /> Use an iOS UI based app
                                                📱
                                              </span>{" "}
                                            </span>
                                          </CommandItem>
                                          <CommandItem>
                                            <span>
                                              {"Low end device?"}{" "}
                                              <span className="opacity-60">
                                                <br /> Use a blazing fast UI ⚡
                                              </span>{" "}
                                            </span>
                                          </CommandItem>
                                          <CommandItem>
                                            <span>
                                              {"No PC?"}{" "}
                                              <span className="opacity-60">
                                                <br /> Use resizable screens on
                                                the web 🖥️
                                              </span>{" "}
                                            </span>
                                          </CommandItem>
                                        </CommandGroup>

                                        <CommandSeparator />
                                        <CommandGroup heading="Github Contributors">
                                          <CommandItem>
                                            <span>
                                              {"Sana Samreen"}{" "}
                                              <span className="opacity-60">
                                                <br /> UI and UX
                                              </span>{" "}
                                            </span>
                                          </CommandItem>
                                        </CommandGroup>
                                      </CommandList>
                                    </Command>{" "}
                                  </MenubarItem>
                                </MenubarContent>
                              </MenubarMenu>
                            </div>
                          </ResizablePanel>
                          <ResizableHandle withHandle />
                          <ResizablePanel defaultSize={50}>
                            <div className="flex h-full w-full items-center justify-center">
                              <span className=" text-sm opacity-50">
                                ← Drag to resize for small devices.
                              </span>
                            </div>
                          </ResizablePanel>
                        </ResizablePanelGroup>
                      </Menubar>
                    </DrawerHeader>

                    <DrawerFooter></DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </CarouselItem>

            {/* <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button variant={"link"}>
                    <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                      ADVNote
                    </h1>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-gradient-to-b from-red-700 to-black">
                  <div className="min-h-[70vh] h-auto">
                    <DrawerHeader>
                      <div className="flex flex-col justify-center bg-black rounded-2xl border-2 border-red-500 text-center h-full my-10">
                        <DrawerTitle>
                          Alright, so a boom of Publised notes!
                        </DrawerTitle>
                        <br />
                        <DrawerDescription>
                          Straight from 27 to 119 in 8 days.
                        </DrawerDescription>
                      </div>
                    </DrawerHeader>

                    <DrawerFooter></DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </CarouselItem> */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
    </>
  );
}
