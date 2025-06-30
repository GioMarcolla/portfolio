"use client";

import { BriefcaseBusiness, FolderCog, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import ThemeToggleButton from "@/Components/ThemeToggleButton";

import { Button } from "../UI/button";
import MenuButton from "../UI/MenuButton";
import FixedNavbar from "./FixedNavbar";
import MobileNavbar from "./MobileNavbar";

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
        <SelectedNavbar>
            <div className="flex flex-col flex-1 justify-between items-center pt-8 md:pt-0">
                <div>
                    <Image
                        src={"/assets/images/og-image.png"}
                        height={48}
                        width={48}
                        className="dark:invert"
                        alt="Giovanni Marcolla Logo"
                    />
                </div>
                <nav className="flex flex-col items-center gap-2">
                    <MenuButton
                        icon={House}
                        tooltipText={"Home"}
                        path="/"
                        name="Home"
                        className="w-24 md:w-12 h-12 md:h-12"
                    />
                    <p className="md:hidden mb-4">Home</p>
                    <MenuButton
                        icon={BriefcaseBusiness}
                        tooltipText={"Work Experience"}
                        path="/experience"
                        name="Experience"
                        className="w-24 md:w-12 h-12 md:h-12"
                    />
                    <p className="md:hidden mb-4">Experience</p>
                    <MenuButton
                        icon={FolderCog}
                        tooltipText={"Other projects"}
                        path="/projects"
                        name="Projects"
                        className="w-24 md:w-12 h-12 md:h-12"
                    />
                    <p className="md:hidden mb-4">Projects</p>
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
                                    className="dark:invert w-auto h-6 md:h-4"
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
                                    className="dark:invert w-auto h-6 md:h-4"
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
