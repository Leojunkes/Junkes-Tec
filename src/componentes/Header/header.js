import {
  Image,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
const Header = () => {
  return (
    <Flex>
      <Image m="30px 0 0 150px" w="6rem" src="/imagens/logoLeo.png" />

      <Box
        m="30px 30px 0 0"
        display="flex"
        justifyContent="flex-end"
        w="100%"
        bg="#1b252b"
      >
        <Tabs variant="line" colorScheme="orange">
          <TabList>
            <Link href='#home'>
            <Tab _focus="none">Home</Tab>
            </Link>
            
            <Link href="#sobre">
              <Tab _focus="none">Sobre</Tab>
            </Link>
            <Link href="#projetos">
              <Tab _focus="none">Projetos</Tab>
            </Link>
            <Link href='#contato'>
              <Tab _focus="none">Contato</Tab>
            </Link>
          </TabList>
        </Tabs>
      </Box>
    </Flex>
  );
};
export default Header;
