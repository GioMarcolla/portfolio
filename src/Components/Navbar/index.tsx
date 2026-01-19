"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

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

const Navbar = React.memo(() => {
    const [isMdUp, setIsMdUp] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMdUp(window.innerWidth >= 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const content = useMemo(() => {
        return (
            <div className="flex flex-col flex-1 justify-between items-center pt-8 md:pt-0">
                <div>
                    <Image
                        src={"/assets/images/og-image.png"}
                        height={48}
                        width={48}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
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
                        IconComponent={HomeIcon}
                        tooltipText={"Home"}
                        path="/"
                        name="Home"
                        className="hover:bounce-once"
                    >
                        <p className="md:hidden mb-4">Home</p>
                    </MenuButton>
                    <MenuButton
                        IconComponent={WorkIcon}
                        tooltipText={"Work Experience"}
                        path="/experience"
                        name="Experience"
                    >
                        <p className="md:hidden mb-4">Experience</p>
                    </MenuButton>
                    <MenuButton
                        IconComponent={ProjectIcon}
                        tooltipText={"Projects"}
                        path="/projects"
                        name="Projects"
                    >
                        <p className="md:hidden mb-4">Projects</p>
                    </MenuButton>
                    <MenuButton
                        IconComponent={EventIcon}
                        tooltipText={"Events"}
                        path="/events"
                        name="Events"
                    >
                        <p className="md:hidden mb-4">Events</p>
                    </MenuButton>
                    <MenuButton
                        IconComponent={CertificateIcon}
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
                                        "h-6 w-6 md:h-4 md:w-4",
                                        "vapor:invert!",
                                        "race:invert!",
                                        "gloomy:invert!"
                                    )}
                                    width={16}
                                    height={16}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"            
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
                                        "h-6 w-6 md:h-4 md:w-4",
                                        "vapor:invert!",
                                        "race:invert!",
                                        "gloomy:invert!"
                                    )}
                                    width={16}
                                    height={16}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"            
                                    alt="GitHub Logo"
                                />
                            </Link>
                        </Button>
                    </div>
                    <ThemeToggleButton />
                </div>
            </div>
        );
    }, []);

    return (
        <>
            <MobileNavbar
                className={
                    "bg-background border-t-0! border-b-0! border-l-0! pop-up-100" +
                    (isMdUp ? " hidden" : "")
                }
            >
                {content}
            </MobileNavbar>

            <FixedNavbar
                className={
                    "bg-background border-t-0! border-b-0! border-l-0! pop-up-100" +
                    (isMdUp ? "" : " hidden")
                }
            >
                {content}
            </FixedNavbar>
        </>
    );
});

export default Navbar;
