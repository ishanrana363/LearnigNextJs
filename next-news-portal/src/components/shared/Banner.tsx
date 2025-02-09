import { Button } from "../ui/button"
import img from "@/assests/banner.jpg"
import Image from 'next/image'

const Banner = () => {
  return (
    <div  >
      <div className="bg-slate-200" >
        <div className="p-8 my-8 grid md:grid-cols-2 items-center gap-6 lg:grid-cols-2 " >
          <div>
            <Image
              src={img}
              alt="Picture of the author"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div className="flex-col space-y-5 " >
            <h4 className="text-gray-500 font-medium text-sm   " >Technology</h4>
            <h1 className="lg:text-3xl font-bold " >OpenAI Is Growing Fast and Burning Through Piles of Money</h1>
            <p>
              OpenAI monthly revenue hit US$300 million in August, up 1,700% since
              the beginning of 2023, and the company expects about $3.7 billion in
              annual sales this year, according to financial documents reviewed by
              The New York Times.
              <br /> <br />
              OpenAI estimates that its revenue will balloon to copy1.6 billion
              next year. OpenAI revenue in August more than tripled from a year
              earlier, according to the documents, and about 350 million people —
              up from around 100 million in March of this year — used its services
              each month as of June.
            </p>
            <Button className="my-3" variant={"default"} >Read more</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
