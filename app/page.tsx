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



export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
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
              <DrawerDescription>first off, my discord friends hate instagram, actually we are on another platform made by us</DrawerDescription>
            <DrawerDescription>{"second up, I ask you talk to non-boys? Basically everyone that asks says 'yes', I reply then you're not even close, anyways you droppin into my followers list?"}</DrawerDescription>
            <br />
          
            </div>
          </DrawerHeader>
          
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>


      
    </main>
    <div className="flex items-center justify-center text-center p-6">{"Views: 491K+"}</div>
    </>
      )
}
    
