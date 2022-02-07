import { Button, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      id="fixedTools"
      h="40px"
      alignItems="center"
      justifyContent="end"
      right="50px"
      position="fixed"
      w="100%"
    >
      <Button bg="green" type="button">
        aperte
      </Button>
    </Flex>
  );
};
export default Footer;
