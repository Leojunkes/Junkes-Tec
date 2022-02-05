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

const Header = () => {
  return (
    <Flex >
      <Image  m="30px 0 0 150px" w="6rem" src="/imagens/logoLeo.png" /> 
   
      <Box
        m="30px 30px 0 0"
        display="flex"
        justifyContent="flex-end"
        w="100%"
        bg="#1b252b"
      >
        <Tabs variant="line" colorScheme="orange">
          <TabList>
            <Tab _focus="none">Home</Tab>
            <Tab _focus="none">Sobre</Tab>
            <Tab _focus="none">Projetos</Tab>
            <Tab _focus="none">Contato</Tab>
          </TabList>
        </Tabs>
      </Box>
    </Flex>
  );
};
export default Header;
