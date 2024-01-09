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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[50vh]">


        <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
            <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant={'link'}> <div className='flex items-center'><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      Sugar?
    </h1> <div className=' bg-green-400 border border-green-600 py-2 px-4 rounded-2xl h-auto text-green-950'>Updated</div></div></Button>
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
            <DrawerDescription>9/1/24</DrawerDescription>
              <br/>
              <DrawerTitle>Do you even know?</DrawerTitle>
             <br/>
              <DrawerDescription>The day we met, that same instance our time of getting out of reach was also decided.</DrawerDescription>
            <DrawerDescription>You know how it feels to get ignored? get blocked directly? no replies? always guess out the situations? see the favourite person with your enemies? see the favourite person being more happier than ever without you? just acting infront of you to gain attention? talking with others and showing attitude only towards you? building friendship with people you do not know about, knowing they could message and talk directly to your favourite person without you even know about it? </DrawerDescription>
            <br />
            <DrawerDescription>I know if it was someone else than you I would have made them my rival, no matter what. But for you, I forgive you, no matter what.</DrawerDescription>
              <br/>
    
              <DrawerDescription>Being honest, you think me as a teddy bear that you can squeeze, kick or hug anytime you want. Cuz you know that teddy bear {"ain't"} making new friends of your category. But, you never saw the teddy bear was getting torn-up from the back. And the day you actually see it, you would be realising you would never see me again because I went somewhere far away.</DrawerDescription>
         <br/>
              <DrawerDescription>I know it is completely normal for you all to talk to opposite people. And you are no different. And if you think it as muy weakness. I would rather say it is a blessing from my parents rather than some crazy restrictions. Among all, thousands of Instagram accounts of students, I was opted. I know it is not my weakness afterall, I know I could make friends, like SA-B (cutest of all and the person who radiates my own vibes) and SA-A (serious, but funny as well).</DrawerDescription>
            
      </div>
          </DrawerHeader>
          
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>

          </CarouselItem>
          
      
        
          <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
            <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant={'link'}> <div className='flex items-center'><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      SA-B?
    </h1> <div className=' bg-green-400 border border-green-600 py-2 px-4 rounded-2xl h-auto text-green-950'>Updated</div></div></Button>
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
            <DrawerDescription>8/1/24</DrawerDescription>
              <br/>
              <DrawerTitle>You should smile</DrawerTitle>
             <br/>
              <DrawerDescription>Your smile is something precious, the way you smiled that day even I could not resist smiling back</DrawerDescription>
            <DrawerDescription>{"You look so cute, just like"} <Link href={'https://w0.peakpx.com/wallpaper/26/103/HD-wallpaper-monkey-selfie-face-thumbnail.jpg'}> <span className='underline text-blue-600 font-medium'>this</span></Link> 💀</DrawerDescription>
            <br />
            <DrawerDescription>SugarByte/Sugar text was not for you. You are always welcomed. I am angry on them so I am gonna be fighting. After a couple of days even they know I will be welcoming them once again like I always do.</DrawerDescription>
              <br/>
            <br />
            <DrawerDescription>9/1/24</DrawerDescription>
              <br/>
              <DrawerTitle>{'"Humko aise bolta hai?'} tum toh <Link href={'https://i.pngimg.me/thumb/f/720/m2i8H7H7Z5K9d3A0.jpg'}> 
              <span className='underline text-blue-600 font-medium'>aisa</span> </Link>{' dikhta hai"'}</DrawerTitle>
              <br/>
              <DrawerDescription>M sirf mazak karha tha 🥲</DrawerDescription>
              <DrawerDescription>{'"Vaise hum..."'}</DrawerDescription>
              <DrawerDescription> *sighs*</DrawerDescription>
              <DrawerDescription>{'"... mazak nahi kiye"'}</DrawerDescription>
              <DrawerDescription>😨😞😔🥲😭</DrawerDescription>
          </div>
          </DrawerHeader>
          
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>

          </CarouselItem>



          <CarouselItem className="pt-1 md:basis-1/2 flex items-center justify-center text-center">
            <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant={'link'}><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      ADVNote
    </h1></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="min-h-[70vh] h-auto px-6">
          <DrawerHeader >
            <div className='h-auto w-full flex items-center justify-start'>
            <DrawerClose asChild>
              <Button variant="ghost"><h1 className=' text-blue-600'>Close</h1></Button>
            </DrawerClose>
            </div>
            <div className='flex flex-col justify-center text-center h-full my-10'>
           <DrawerDescription>8/1/24</DrawerDescription>
              <br/>
              <DrawerTitle>You know there are way too many dummies and stalkers than actual users.</DrawerTitle>
             <br/>
              <DrawerDescription>Its Clerk bud. Their privacy policy. Not mine.</DrawerDescription>
         <br/>
              <DrawerDescription>Also, the new feature @advwastaken.vercel.app, {"don't"} use arrows like a kid, scroll right away like an insta reel, yt short instead. It took time to build with framer motion, gotta flex 💪</DrawerDescription>
     <br/>
              <DrawerDescription>I know ROG Phone is far better, but still, I like iOS UI.</DrawerDescription>
     
            </div>
          </DrawerHeader>
          
          <DrawerFooter>
            
          </DrawerFooter>
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
      )
}
    
