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
                "xl:!flex-row xl:gap-[10dvh] xl:h-dvh xl:min-h-dvh xl:max-h-dvh xl:p-[10dvh]",
                "2xl:justify-around 2xl:!gap-[unset]"
            )}
        >
            <StyledIntro
                className={cn(
                    "flex-1 h-[45dvh] max-h-[45dvh]",
                    "md:flex-9 md:h-[85dvh] md:max-h-[85dvh]",
                    "xl:flex-1 xl:h-[80dvh] xl:max-h-[80dvh]"
                )}
            />
            <IntroMozaic
                className={cn(
                    "flex-1 h-[40dvh] max-h-[40dvh]",
                    "md:flex-11 md:h-[85dvh] md:max-h-[85dvh]",
                    "xl:flex-1 xl:h-[80dvh] xl:max-h-[80dvh]"
                )}
            />
        </div>
    );
};

export default IntroHero;
