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
        <div className="flex xl:!flex-row flex-col 2xl:justify-around gap-[10dvh] 2xl:!gap-[unset] xl:!gap-[5dvh] p-[5dvh] h-[200dvh] xl:!h-dvh min-h-[200dvh] xl:!min-h-dvh xl:!max-h-dvh">
            <StyledIntro className="flex-9 xl:flex-1 max-h-[90dvh]" />
            <IntroMozaic className="flex-11 xl:flex-1 max-h-[90dvh]" />
        </div>
    );
};

export default IntroHero;
