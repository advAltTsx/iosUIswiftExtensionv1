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

export default function Home() {
  return (
    <>
      <main
        className="flex min-h-screen bg-black 
   bg-auto flex-col items-center justify-center overflow-y-clip overflow-x-clip"
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
                      <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                        Yesterday
                      </h1>{" "}
                      <div className=" bg-gray-300 border  border-white text-gray-950 font-bold py-2 px-4 rounded-2xl h-auto">
                        WorstPerformer
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
                      <DrawerDescription>
                        {"pata hai aap sabhi 'koi nhi' bologe"} <br />
                        {
                          "parr mereko pata hai ki main aisa kaam krdiya ki face dikhane ke layak nahi tha, bass chala jaana chahta tha kaise bhi"
                        }
                      </DrawerDescription>
                      <br />

                      <Menubar>
                        <div className="flex justify-around  w-full">
                          <MenubarMenu>
                            <MenubarTrigger>
                              <span className="underline">Sugar</span>
                            </MenubarTrigger>
                            <MenubarContent>
                              <MenubarItem>
                                {
                                  "voh mereko bulane ka voh sabse worst way tha"
                                }{" "}
                                <MenubarShortcut></MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem>
                                {
                                  "unit tests mein class 6-10 ki bacchi merese answer puchti hai toh"
                                }{" "}
                                <br />
                                mera aawaz nahi aata
                              </MenubarItem>

                              <MenubarItem>
                                {
                                  "group of 2, 12th students + both ... , yeh toh durr ka baat tha"
                                }
                              </MenubarItem>
                              <MenubarItem>
                                {
                                  "aapko eyes-wise indicate kiya tha apke bagal mein bhi koi hai"
                                }{" "}
                                <br />
                                parr aap nahi samjhe toh main reply kardiya
                              </MenubarItem>
                              <MenubarItem>
                                {
                                  "joh line last bolke aarha tha, 'nahi nahi, main jaa rha hu'"
                                }{" "}
                                <br />
                                vahi line vhir se repeat kr diya itna nervousness mein
                              </MenubarItem>
                            </MenubarContent>
                          </MenubarMenu>
                          <MenubarMenu>
                            <MenubarTrigger>
                              <span className="underline">SA-B</span>
                            </MenubarTrigger>
                            <MenubarContent>
                              <MenubarItem>
                                {
                                  "Main apko dekha tha mere samne aate"
                                }{" "} <br />
                                parr uss samay mental setback tha apna situation pe
                                <MenubarShortcut></MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem>
                                {
                                  "pushed + unbalanced + sand, "
                                } <br />
                                bass socch rha tha kaise bhi balance hojaye, <br /> ho bhi gya tha parr sand slip...
                              </MenubarItem>

                              <MenubarItem>
                                {
                                  "aur please mere utna samne nahi ayiyega"
                                } <br />
                                jab aap Gaurav se baat karrahe the <br />
                                mere parents restriction mein yeh bhi hai ki <br />
                                ki main koi ... ko physically touch nahi karsakta, <br />
                                accidental touch as exception <br />
                                </MenubarItem>
                                <MenubarItem>
                                toh main iss baar khud aajaunga <br /> 
                                mereko khud aap acche lagte hai behaviour wise
                              
                                </MenubarItem>
                            </MenubarContent>
                          </MenubarMenu>
                        </div>
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
