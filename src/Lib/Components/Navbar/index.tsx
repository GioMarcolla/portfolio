import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { ColorModeButton } from "@/Lib/Components/UI/ColorMode";

const index: FC = () => {
    return (
        <Box>
            <Flex>
                {/* <Heading>{BioData.Name.toString()}</Heading> */}
                <Heading>Giovanni Marcolla</Heading>
                <ColorModeButton />
            </Flex>
        </Box>
    );
};

export default index;
