import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { BioData } from "@/Lib/Constants/BioData";
import { ColorModeButton } from "@/Components/UI/ColorMode";

const index: FC = () => {
    return (
        <Box>
            <Flex>
                {/* <Heading>{BioData.Name.toString()}</Heading> */}
                <Heading>{`${BioData.Name}`}</Heading>
                <ColorModeButton />
            </Flex>
        </Box>
    );
};

export default index;
