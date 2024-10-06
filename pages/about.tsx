import { skills } from "@/Data/Data";
import Skills from "@/components/Skills";
import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import Image from "next/image";

export default function about() {
    return (
        <>
            <Head>
                <title>Sagillaire | About</title>
            </Head>
            <Wrapper pageIndex={2}>
                <div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0">
                    <Image src="/about.JPEG" width={300} height={300} alt="About Image" className="grayscale rounded-md border-2 border-Orange" />
                    <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
                        <div className="uppercase font-semibold text-sm text-WhiteGray">- Introduction</div>
                        <div className="font-semibold text-3xl mt-8 text-White uppercase">Systems Engineer, Mobile & FrontEnd Developer, located in Barcelona</div>
                        <p className="text-WhiteGray text-sm mt-8 leading-7">
                            I am a passionate frontend developer with a creative eye for design and a strong focus on
                            delivering elegant and intuitive interfaces. Exited to colaborate on new projects!
                        </p>
                        <div className="flex gap-8 mt-8">
                            <a className="text-Orange font-semibold text-sm uppercase hover:underline" href="/pdf/resume.pdf" download>Resume</a>
                        </div>
                    </div>
                </div>
                <Skills skills={skills} />
            </Wrapper>
        </>
    )
}
