import { cn } from "@/Lib/Utils/shadCNUtils";
import IntroMozaic from "../IntroMozaic";
import StyledIntro from "../StyledIntro";

type Props = {};

const IntroHero = ({}: Props) => {
    // const getData = useBioDataStore((state) => state.getData);
    // const [bioData, setBioData] = useState<BioDataType | null>(null);

    // useEffect(() => {
    //     getData().then(setBioData).catch(console.error);
    // }, [getData]);

    return (
        <div
            className={cn(
                "flex flex-col gap-[5dvh] p-[5dvh] h-[100dvh] min-h-[100dvh]",
                " md:gap-[10dvh] md:p-[5dvh] md:h-[200dvh] md:min-h-[200dvh]",
                "xl:!flex-row xl:gap-[5dvh] xl:h-dvh xl:min-h-dvh xl:max-h-dvh ",
                "2xl:justify-around 2xl:!gap-[unset]"
            )}
        >
            <StyledIntro className={cn("", "md:flex-9 md:max-h-[90dvh]", "xl:flex-1")} />
            <IntroMozaic className={cn("", "md:flex-11 md:max-h-[90dvh]", "xl:flex-1")} />
        </div>
    );
};

export default IntroHero;
