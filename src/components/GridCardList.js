import React from 'react'
import { useNavigate } from 'react-router';
import { Image, Shimmer } from 'react-shimmer';

const GridCardList = ({ data, type }) => {

  const displayRating = (rating) => {
    let number = parseFloat(rating).toFixed(2);
    const score = Math.ceil(number * 10);

    return (
      <div className="absolute bottom-[7%]  right-0 rj-lg:bottom-[13%] rj-sm:hidden">
        <h1 className={`img-wrapper w-[60px] h-[60px] flex justify-center items-center rounded-full  text-lg  ${score >= 75 ? "border-4 border-t-green-400 border-r-green-400 border-b-green-400 border-l-gray-400" : score >= 40 ? " border-4 border-t-yellow-300 border-r-yellow-300 border-b-gray-400 border-l-gray-400" : score < 39 ? "border-4   border-t-red-500 border-r-gray-400 border-b-gray-400 border-l-gray-400" : null}`}> {score} <sup>%</sup></h1>
      </div>
    )

  }

  const nav = useNavigate();
  let title;
  let subtitle;

  return (
    <div className="grid  grid-cols-5 gap-5 gap-y-8 rj-sm:grid-cols-2 rj-sm:gap-3 rj-sm:gap-y-2 rj-lg:grid-cols-4 ">
      {data?.results.map((res, index) => {
        title = res.title ?? res.name ?? res.original_name;
        subtitle = title.substring(0, 30);
        return (
          <div className="relative   h-[100%]  hover:scale-105 ease-in-out duration-150" key={res.id} onClick={() => { nav(`/${type}/detail/${res?.id}`) }}  >
            <div className=" h-[92%] rounded-md overflow-hidden rj-sm:h-[85%] rj-lg:h-[85%] rj-sm:w-[100%] ">

              <Image
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${res.poster_path}`}
                fallback={<Shimmer width={270} height={410} />}

              />

            </div>

            <div className=" text-center  px-2  rj-sm:text-xs rj-sm:px-0 rj-sm:pt-2 rj-lg:pt-2   rj-md:text-sm   rj-sm:h-[18%]  overflow-hidden ">
              <h2 className=''>{subtitle}</h2>
            </div>
            {displayRating(res.vote_average)}

          </div>

        )
      })}



    </div>
  )
}

export default GridCardList