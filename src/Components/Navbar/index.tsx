import { BriefcaseBusiness, FolderCog, House, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import ThemeToggleButton from '@/Components/ThemeToggleButton';

import { Button } from '../UI/button';
import MenuButton from '../UI/MenuButton';

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
                    <Image
                        src="og-image.png"
                        height={48}
                        width={48}
                        className="dark:invert"
                        alt="Giovanni Marcolla Logo"
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
                            <Link href="https://www.linkedin.com/in/giomarcolla/" target="_blank" color="text">
                                <Image
                                    src={"/inbug-black.png"}
                                    className="dark:invert h-4"
                                    width={16}
                                    height={16}
                                    alt='LinkedIn Logo'
                                />
                            </Link>
                        </Button>
                        <Button variant={"link"} className="p-1">
                            <Link href="https://github.com/GioMarcolla/portfolio" target="_blank" color="text">
                                <Image
                                    src={"/github-mark.png"}
                                    className="dark:invert h-4"
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
        </div>
    );
};

export default index;
