/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { projects } from "@/Data/Data";
import Wrapper from "@/components/Wrapper";
import { AiFillGithub, AiFillEye } from "react-icons/ai";

export default function portfolio() {
    return (
        <>
            <Head>
                <title>Sagillaire | Portfolio</title>
            </Head>
            <Wrapper pageIndex={3}>
                <div className="flex flex-col pt-40 items-center text-center">
                    <div className="uppercase font-semibold text-sm text-WhiteGray">- Portfolio</div>
                    <div className="font-semibold text-3xl mt-8 text-White uppercase">My masterpiece collection</div>
                    <p className="text-WhiteGray text-sm mt-8 leading-7">
                        I am a passionate web developer specializing in creating custom applications for a variety of business needs, from e-commerce platforms
                        to data visualization dashboards. I use cutting-edge technologies and agile methodologies to deliver exceptional user experiences and measurable results.
                        My approach focuses on close collaboration, transparency and attention to the latest trends, ensuring solutions that not only meet but exceed expectations,
                        driving business success for my clients.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
                        {projects.map(project => (
                            <div key={project.id} className="bg-Blur p-4 h-[350px] rounded-lg">
                                <div className="w-full h-3/4 relative group">
                                    <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
                                    <div className="absolute w-full h-full bg-Orange top-0 left-0 z-10 flex items-center justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-300">
                                        <Link href={project.github_url}>
                                            <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300" />
                                        </Link>
                                        <Link href={project.project_url}>
                                            <AiFillEye className="text-3xl hover:scale-110 transition-all duration-300" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-White mt-2 text-start">{project.name}</div>
                                <div className="flex mt-2">
                                    {project.tools.map(tool => (
                                        <span className="bg-Blur mr-2 rounded-full py-2 px-2 text-White text-[10px]" key={tool}>{tool}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </>
    );
};
