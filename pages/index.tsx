/* eslint-disable react/no-unescaped-entities */
import Wrapper from "@/components/Wrapper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sagillaire | Home</title>
      </Head>
      <Wrapper pageIndex={1} className="max-w-2xl text-center flex flex-col justify-center">
        <div className="flex sm:justify-between items-center gap-4 sm:gap-0 px-8">
          <div className="text-xl sm:text-3xl ml-[5%] sm:ml-0 uppercase text-WhiteGray font-bold">Hi, I'm</div>
          <div className="sm:h-2 md:w-[25rem] xs:w-[19rem] rounded-sm bg-Orange"></div>
        </div>
        <div className="sm:text-[6.2rem] xs:text-7xl text-5xl text-White font-medium">Juan Santis</div>
        <div className="uppercase font-bold xs:text-2xl text-xl text-Orange text-end mt-8 px-14">A Frontend <br />Developer</div>
      </Wrapper>
    </>
  )
}
