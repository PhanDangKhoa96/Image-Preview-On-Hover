import {projects} from "@/lib/data";
import {ProjectListing} from "./ProjectListing";

const FeaturedProjects = () => {
    return (
        <section>
            <h1 className="mb-12 text-[clamp(3rem,10vw,9rem)] leading-none font-bold tracking-tight text-black uppercase">
                <span>Featured</span>
                <br />
                <span className="ml-10 lg:ml-40">Projects</span>
            </h1>

            <div className="mb-0 grid grid-cols-[1fr_2rem] gap-4 border-b border-black/20 pb-2 text-xs tracking-widest text-black/40 uppercase md:grid-cols-[4rem_1fr_6rem_2rem]">
                <span className="hidden md:block">Number</span>
                <span>Title</span>
                <span className="hidden text-right md:block">Date</span>
                <span />
            </div>

            <ProjectListing projects={projects} />
        </section>
    );
};

export {FeaturedProjects};
