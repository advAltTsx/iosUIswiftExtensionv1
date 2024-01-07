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
           
              <DrawerTitle>Gathering up, the confidence to talk to you</DrawerTitle>
             <DrawerDescription>If I do some wierd activities while talking pls bear it</DrawerDescription>
            <DrawerDescription>{"Ik I'm gonna be hella awkward"}</DrawerDescription>
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
    
