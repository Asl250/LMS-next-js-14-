import SectionTitle from '@/components/section-title/section-title'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { BadgeDollarSign, CandlestickChart, DraftingCompass, FileCode, PencilRuler, UserRound } from 'lucide-react'

const Categories = () => {
  return (
        <div className={"max-w-4xl xl:mx-auto mx-[5%]"}>
          <SectionTitle title="Categories" subtitle="Browse through categories of courses" />
          <Carousel>
            <CarouselContent className={"mx-1 space-x-3"}>
              
              <CarouselItem className="cursor-pointer md:basis-[calc(100%/3-12px)] sm:basis-1/2 w-[95%] items-center px-9 py-12 dark:bg-gray-900 bg-gray-200 rounded-2xl">
                <PencilRuler width={80} height={80} className={"flex mx-auto"}/>
                <p className={"mx-auto text-center text-xl"}>Design Category</p>
              </CarouselItem>
              
              <CarouselItem className="cursor-pointer md:basis-[calc(100%/3-12px)] sm:basis-1/2 w-[95%] items-center px-9 py-9 dark:bg-gray-900 bg-gray-200 rounded-2xl">
                <BadgeDollarSign width={80} height={80} className={"flex mx-auto"}/>
                <p className={"mx-auto text-center text-xl"}>Sales Marketing Category</p>
              </CarouselItem>
              
              <CarouselItem className="cursor-pointer md:basis-[calc(100%/3-8px)] sm:basis-1/2 w-[95%] items-center px-9 py-10 dark:bg-gray-900 bg-gray-200 rounded-2xl">
                <FileCode width={80} height={80} className={"flex mx-auto"}/>
                <p className={"mx-auto text-center text-xl"}>Development IT Category</p>
              </CarouselItem>
              
              <CarouselItem className="cursor-pointer md:basis-[calc(100%/3-8px)] sm:basis-1/2 w-[95%] items-center px-9 py-10 dark:bg-gray-900 bg-gray-200 rounded-2xl">
                <DraftingCompass width={80} height={80} className={"flex mx-auto"}/>
                <p className={"mx-auto text-center text-xl"}>Engineering Architecture Category</p>
              </CarouselItem>
              
              <CarouselItem className="cursor-pointer md:basis-[calc(100%/3-12px)] sm:basis-1/2 w-[95%] items-center px-9 py-10 dark:bg-gray-900 bg-gray-200 rounded-2xl">
                <UserRound width={80} height={80} className={"flex mx-auto"}/>
                <p className={"mx-auto text-center text-xl"}>Personal Development Category</p>
              </CarouselItem>
              
              <CarouselItem className="cursor-pointer md:basis-[calc(100%/3-12px)] sm:basis-1/2 w-[95%] items-center px-9 py-10 dark:bg-gray-900 bg-gray-200 rounded-2xl">
                <CandlestickChart width={80} height={80} className={"flex mx-auto"}/>
                <p className={"mx-auto text-center text-xl"}>Finance Accounting Category</p>
              </CarouselItem>
              
            </CarouselContent>
          </Carousel>
        
        </div>
    );
};

export default Categories;
