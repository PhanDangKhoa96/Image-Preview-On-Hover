"use client";

import {Project} from "@/lib/data";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
import {ProjectImageSlider} from "./ProjectImageSlider";
import {ProjectRow} from "./ProjectRow";

interface ProjectListingProps {
    projects: Project[];
}

const ProjectListing = ({projects}: ProjectListingProps) => {
    const listingRef = useRef<HTMLUListElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const {contextSafe} = useGSAP(
        () => {
            if (!listingRef.current) return;

            const preview = listingRef.current.querySelector(".image-preview");
            if (!preview) return;

            const xTo = gsap.quickTo(".image-preview", "x", {
                duration: 0.4,
                ease: "power3",
            });
            const yTo = gsap.quickTo(".image-preview", "y", {
                duration: 0.4,
                ease: "power3",
            });

            const handleMouseMove = (e: MouseEvent) => {
                const rect = preview.getBoundingClientRect();
                xTo(e.clientX - rect.width / 2 + 200);
                yTo(e.clientY - rect.height / 2);
            };

            document.body.addEventListener("mousemove", handleMouseMove);
            return () =>
                document.body.removeEventListener("mousemove", handleMouseMove);
        },
        {scope: listingRef}
    );

    const onHover = contextSafe(
        (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
            gsap.to(sliderRef.current, {
                yPercent: (-100 / projects.length) * index,
                duration: 0.5,
                ease: "power4.out",
            });
        }
    );

    return (
        <ul ref={listingRef} className="group/project-list">
            {projects.map((project, index) => (
                <ProjectRow
                    key={project.id}
                    project={project}
                    index={index}
                    onHover={onHover}
                />
            ))}

            <ProjectImageSlider projects={projects} sliderRef={sliderRef} />
        </ul>
    );
};

export {ProjectListing};
