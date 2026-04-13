import {Project} from "@/lib/data";
import Image from "next/image";
import {RefObject} from "react";

interface ProjectImageSliderProps {
    projects: Project[];
    sliderRef: RefObject<HTMLDivElement | null>;
}

const ProjectImageSlider = ({projects, sliderRef}: ProjectImageSliderProps) => {
    return (
        <div className="image-preview pointer-events-none fixed top-0 left-0 flex aspect-9/14 w-60 flex-col overflow-hidden opacity-0 transition-opacity delay-50 duration-200 ease-out group-has-[a:hover]/project-list:opacity-100 group-has-[a:hover]/project-list:delay-0">
            <div className="w-full" ref={sliderRef}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative aspect-9/14 w-full flex-1">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="240px"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export {ProjectImageSlider};
