"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import ThemeToggleButton from "@/Components/ThemeToggleButton";

import { Button } from "../UI/button";
import MenuButton from "../UI/MenuButton";
import FixedNavbar from "./FixedNavbar";
import MobileNavbar from "./MobileNavbar";
import { cn } from "@/Lib/Utils/shadCNUtils";
import {
    HomeIcon,
    WorkIcon,
    ProjectIcon,
    EventIcon,
    CertificateIcon,
} from "../UI/Icons";

const Navbar: FC = () => {
    const [isMdUp, setIsMdUp] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMdUp(window.innerWidth >= 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const SelectedNavbar = isMdUp ? FixedNavbar : MobileNavbar;

    return (
        <SelectedNavbar className="bg-background border-primary border-r-1">
            <div className="flex flex-col flex-1 justify-between items-center pt-8 md:pt-0">
                <div>
                    <Image
                        src={"/assets/images/og-image.png"}
                        height={48}
                        width={48}
                        className={cn(
                            "mt-8 w-24 h-24",
                            "md:w-12 md:h-12 md:mt-0",
                            "vapor:invert",
                            "race:invert",
                            "gloomy:invert"
                        )}
                        alt="Giovanni Marcolla Logo"
                    />
                </div>
                <nav
                    data-slot="active"
                    className="flex flex-col items-center gap-8"
                >
                    <MenuButton
                        icon={<HomeIcon className="size-8" />}
                        tooltipText={"Home"}
                        path="/"
                        name="Home"
                    >
                        <p className="md:hidden mb-4">Home</p>
                    </MenuButton>
                    <MenuButton
                        icon={<WorkIcon className="size-8" />}
                        tooltipText={"Work Experience"}
                        path="/experience"
                        name="Experience"
                    >
                        <p className="md:hidden mb-4">Experience</p>
                    </MenuButton>
                    <MenuButton
                        icon={<ProjectIcon className="size-8" />}
                        tooltipText={"Projects"}
                        path="/projects"
                        name="Projects"
                    >
                        <p className="md:hidden mb-4">Projects</p>
                    </MenuButton>
                    <MenuButton
                        icon={<EventIcon className="size-8" />}
                        tooltipText={"Events"}
                        path="/events"
                        name="Events"
                    >
                        <p className="md:hidden mb-4">Events</p>
                    </MenuButton>
                    <MenuButton
                        icon={<CertificateIcon className="size-8" />}
                        tooltipText={"Certifications"}
                        path="/certifications"
                        name="Certifications"
                    >
                        <p className="md:hidden mb-4">Certifications</p>
                    </MenuButton>
                </nav>
                <div>
                    <div>
                        <Button variant={"link"} className="p-1">
                            <Link
                                href="https://www.linkedin.com/in/giomarcolla/"
                                target="_blank"
                                color="text"
                            >
                                <Image
                                    src={"/assets/images/inbug-black.png"}
                                    className={cn(
                                        "w-auto h-6 md:h-4",
                                        "vapor:!invert",
                                        "race:!invert",
                                        "gloomy:!invert"
                                    )}
                                    width={16}
                                    height={16}
                                    alt="LinkedIn Logo"
                                />
                            </Link>
                        </Button>
                        <Button variant={"link"} className="p-1">
                            <Link
                                href="https://github.com/GioMarcolla/portfolio"
                                target="_blank"
                                color="text"
                            >
                                <Image
                                    src={"/assets/images/github-mark.png"}
                                    className={cn(
                                        "w-auto h-6 md:h-4",
                                        "vapor:!invert",
                                        "race:!invert",
                                        "gloomy:!invert"
                                    )}
                                    width={16}
                                    height={16}
                                    alt="GitHub Logo"
                                />
                            </Link>
                        </Button>
                    </div>
                    <ThemeToggleButton />
                </div>
            </div>
        </SelectedNavbar>
    );
};

export default Navbar;
