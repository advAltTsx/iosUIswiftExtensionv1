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
           <DrawerTitle>100 Users <Link href="https://advnote.vercel.app"><span>@ADVNote</span></Link>  complete 🎉</DrawerTitle>
           <DrawerTitle>Only 27 publishes/shares 🥲</DrawerTitle>
           
              <br/>
              <DrawerTitle>Well, how are you?</DrawerTitle>
             <DrawerDescription>Couple of things to say</DrawerDescription>
            <DrawerDescription>{"This time, I'd be totally serious *inaudible laughing noises and whisperings*."}</DrawerDescription>
            <br />
            <DrawerTitle>{"We gotta talk IRL, but I fear"}</DrawerTitle>
            <DrawerDescription>Ever saw me talking to any non-boy in real life? I cannot talk but there is something to say (I heard you are also from ICSE). </DrawerDescription>
              <DrawerDescription>{"I know what you're thinking, 'humse baat karega?', 'ek jhappad maarenge sidha bounce-back karte huye dharti ke andar chala jayega', ek min, kya? 🤯"}</DrawerDescription>
<br/>
              <DrawerTitle>{"acha thik h"}</DrawerTitle>
            <DrawerDescription>as decided, cs/ip pbds-2 k din cls m aunga bulane, recess syd</DrawerDescription>
              <DrawerDescription>{"AI model train krha hu, islye ICSE-irl-student-partner bnana h, aur haan, mera or apka baat kisi aur ko nhi btaiyga"}</DrawerDescription>
              
            </div>
          </DrawerHeader>
          
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
    </main>
    <div className="flex items-center justify-center text-center p-6">{"Views: 490K+"}</div>
    </>
      )
}
    
