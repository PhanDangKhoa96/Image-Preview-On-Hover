import {Project} from "@/lib/data";
import {cn} from "@/lib/utilities/cn";
import Link from "next/link";

interface ProjectRowProps {
    project: Project;
    index: number;
    onHover: (e: React.MouseEvent<HTMLAnchorElement>, index: number) => void;
}

const ProjectRow = ({project, index, onHover}: ProjectRowProps) => {
    return (
        <li className="border-b border-black/10 first:border-t">
            <Link
                href="#"
                data-title={project.title}
                data-index={index}
                onMouseEnter={(e) => onHover(e, index)}
                className={cn(
                    "group/link relative grid grid-cols-[1fr_2rem] items-center gap-4 py-4 md:grid-cols-[4rem_1fr_6rem_2rem]",
                    "transition-opacity duration-250 ease-out",
                    "group-has-[a:hover]/project-list:opacity-20 group-has-[a:hover]/project-list:hover:opacity-100"
                )}>
                <span className="hidden text-sm lg:text-base text-black/40 md:block">{project.number}</span>

                {/* Title with slide-up animation */}
                <span className="relative block overflow-hidden">
                    <span
                        className={cn(
                            "block text-sm lg:text-base font-medium text-black",
                            "transition-transform duration-200 ease-out",
                            "group-hover/link:-translate-y-full"
                        )}>
                        {project.title}
                    </span>
                    <span
                        aria-hidden
                        className={cn(
                            "absolute top-full left-0 block text-sm lg:text-base font-medium text-black",
                            "transition-transform duration-200 ease-out",
                            "group-hover/link:-translate-y-full"
                        )}>
                        {project.title}
                    </span>
                </span>

                <span className="hidden text-right text-sm lg:text-base text-black/50 md:block">
                    {project.date}
                </span>
                <span className="text-right text-sm lg:text-base text-black/40 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                    ↗
                </span>
            </Link>
        </li>
    );
};

export {ProjectRow};
