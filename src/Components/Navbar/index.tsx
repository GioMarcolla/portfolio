import { FC } from "react";
import ThemeToggleButton from "@/Components/ThemeToggleButton";

import Link from "next/link";
import { Button } from "../UI/button";
import { BriefcaseBusiness, FolderCog, House, Menu } from "lucide-react";
import MenuButton from "../UI/MenuButton";

const index: FC = () => {
    return (
        <div className="flex flex-col items-center bg-background p-2 border-secondary-100 dark:border-secondary-300 border-r-1 w-fit min-w-fit h-dvh min-h-dvh max-h-dvh">
            <div className="md:hidden">
                <Button>
                    <Menu />
                </Button>
            </div>
            <div className="flex flex-col flex-1 justify-between items-center">
                <div>
                    <img
                        src="og-image.png"
                        height={"48px"}
                        width={"48px"}
                        className="dark:invert"
                    />
                </div>
                <nav className="flex flex-col gap-2">
                    <MenuButton
                        icon={House}
                        tooltipText={"Home"}
                        path="/"
                        name="Home"
                    />
                    <MenuButton
                        icon={BriefcaseBusiness}
                        tooltipText={"Work Experience"}
                        path="/experience"
                        name="Experience"
                    />
                    <MenuButton
                        icon={FolderCog}
                        tooltipText={"Other projects"}
                        path="/projects"
                        name="Projects"
                    />
                </nav>
                <div>
                    <div>
                        <Button variant={"link"} className="p-1">
                            <Link href="/" color="text">
                                <img
                                    src={"inBug-Black.png"}
                                    className="dark:invert h-4"
                                />
                            </Link>
                        </Button>
                        <Button variant={"link"} className="p-1">
                            <Link href="/" color="text">
                                <img
                                    src={"github-mark.png"}
                                    className="dark:invert h-4"
                                />
                            </Link>
                        </Button>
                    </div>
                    <ThemeToggleButton />
                </div>
            </div>
        </div>
    );
};

export default index;
