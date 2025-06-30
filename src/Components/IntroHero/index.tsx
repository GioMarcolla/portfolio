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
                "flex flex-col gap-[10dvh] p-[5dvh] h-[200dvh] min-h-[200dvh]",
                "xl:!flex-row xl:gap-[5dvh] xl:h-dvh xl:min-h-dvh xl:max-h-dvh ",
                "2xl:justify-around 2xl:!gap-[unset]"
            )}
        >
            <StyledIntro className={cn("flex-9 max-h-[90dvh]", "xl:flex-1")} />
            <IntroMozaic className={cn("flex-11 max-h-[90dvh]", "xl:flex-1")} />
        </div>
    );
};

export default IntroHero;
