import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  HStack,
  VStack,
  Divider,
  Button,
} from "@chakra-ui/react";
import {
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
  BsTriangleFill,
} from "react-icons/bs";
import Link from "next/link";

const Content = () => {
  return (
    <>
      <Grid
        id="containerGrid"
        alignItems="center"
        templateColumns="repeat(3,1fr)"
        gap={6}
      >
        <GridItem m="0 auto" lineHeight="45px">
          <Box id="name">
            <Text fontSize="3rem">Leonardo</Text>
            <Text fontSize="3rem">Junkes</Text>
          </Box>

          <Box
            id="Work"
            flexDirection="column"
            lineHeight="55px"
            display="flex"
          >
            <Text fontSize="1.7rem" color="#f95106">
              Desenvolvedor
            </Text>
            <Text fontSize="1.7rem" color="#f95106" mt="-20px">
              Freelancer
            </Text>
          </Box>
        </GridItem>
        <GridItem h="25rem" w="25rem">
          <Image w="600px" src="/imagens/leoSerio.png" />
          <Flex
            id="boxTecnologies"
            m="-30px 0 0 0"
            textAlign="center"
            justifyContent="center"
          >
            <HStack textAlign="center" justifyContent="center">
              <Box
                bg="blackAlpha.700"
                lineHeight="50px"
                w="8rem"
                h="8rem"
                borderRadius="9px"
                opacity="0.7"
              >
                <Image
                  objectFit="cover"
                  boxSize="120px"
                  src="imagens/java.png"
                  h="8rem"
                />
              </Box>
              <Box
                bg="blackAlpha.700"
                lineHeight="50px"
                w="8rem"
                h="8rem"
                borderRadius="9px"
                opacity="0.7"
              >
                <Image
                  mt="-10px"
                  objectFit="cover"
                  h="10rem"
                  src="/imagens/react.png"
                />
              </Box>
              <Box
                bg="blackAlpha.700"
                lineHeight="50px"
                w="8rem"
                h="8rem"
                borderRadius="9px"
                opacity="0.7"
              >
                <Image src="/imagens/next.png" />
              </Box>
              <Box
                bg="blackAlpha.700"
                lineHeight="50px"
                w="8rem"
                h="8rem"
                borderRadius="9px"
                opacity="0.7"
              >
                <Image
                  objectFit="cover"
                  boxSize="120px"
                  src="/imagens/chakra.png"
                  h="11rem"
                  mt="-14px"
                />
              </Box>
              <Box
                bg="blackAlpha.700"
                lineHeight="50px"
                w="8rem"
                h="8rem"
                borderRadius="9px"
                opacity="0.7"
              >
                <Image
                  objectFit="cover"
                  boxSize="120px"
                  src="/imagens/css.png"
                  w="8rem"
                  h="8rem"
                />
              </Box>
              <Box
                bg="blackAlpha.700"
                lineHeight="50px"
                w="8rem"
                h="8rem"
                borderRadius="9px"
                opacity="0.7"
              >
                <Image
                  objectFit="cover"
                  boxSize="120px"
                  src="/imagens/figma.png"
                  h="10rem"
                  mt="-14px"
                />
              </Box>
            </HStack>
          </Flex>
        </GridItem>
        <GridItem>
          <section id="apresentation1">
            Desenvolvedor Web, Estudante de programação, estudei Administração,
            realizei alguns cursos na Udemy, cursando TI na Rocketseat. Não
            utilizo ferramentas com template pronto, construo do zero, começo
            prototipando no FIGMA, passo a passo para ficar um trabalho
            completo, customizado e lindo!
          </section>
        </GridItem>
      </Grid>
      {/*Tecnologias que atuo*/}
      {/*Fim Tecnologia que atuo*/}
      <Divider w="80%" m="130px auto" />
      <Flex id="sobre" mt="100px" alignItems="center" justifyContent="center">
        <Text
          borderBottom="1px solid"
          borderBottomColor="#f95106"
          fontSize="2xl"
        >
          Sobre
        </Text>
      </Flex>
      <Grid
        m="35px 0 0 100px"
        alignItems="center"
        templateColumns="repeat(2,1fr)"
        gap="6"
      >
        <section>
          Olá sou Leonardo Junkes, estudo e desenvolvo fazem mais de 3
          anos(HTML, CSS, React-js,Next-js, Chakra-ui...), porém com maior
          ênfase no React-js, Next-js a partir de 2020, trabalho como
          Freelancer, tendo realizado trabalhos de Ecommerce, portfólios,tabelas
          de controle financeiro,tabelas de cadastro, entre outros, sempre
          praticando e estudando para entregar o melhor para meus clientes.
        </section>
        <Image
          border="2px solid #f95106 "
          borderRadius="80px"
          src="https://leo-portfolio.vercel.app/imagens/leoFoto.png"
        />
      </Grid>
      <Flex mt="60px" flexDirection="column">
        <VStack spacing={8} ml="100px" align="start">
          <Box display="flex">
            <HStack spacing={8}>
              <Text fontSize="2xl" color="#f95106">
                Missão
              </Text>
              <Text>
                Criar soluções com qualidade, pontualidade e competência.
              </Text>
            </HStack>
          </Box>
          <Box display="flex">
            <HStack spacing={10}>
              <Text fontSize="2xl" color="#f95106">
                Visão
              </Text>
              <Text>
                Ser reconhecido pelo meu trabalho, e por consequência ser
                contratado por uma grande empresa.
              </Text>
            </HStack>
          </Box>
          <Box display="flex">
            <HStack spacing={7}>
              <Text fontSize="2xl" color="#f95106">
                Valores
              </Text>
              <Text>Responsabilidade, Inovação, Criatividade.</Text>
            </HStack>
          </Box>
        </VStack>
      </Flex>
      <Link href="#containerGrid">
        <Button
          bg="#f95106"
          borderRadius="full"
          type="button"
          position="absolute"
          right="30px"
          color="gray.900"
          _hover={{ bg: "orange.400" }}
        >
          <BsTriangleFill style={{ fontSize: "16px" }} />
        </Button>
      </Link>

      <Divider w="80%" m="130px auto" />
      <Flex
        id="projetos"
        mt="100px"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          borderBottom="1px solid"
          borderBottomColor="#f95106"
          fontSize="2xl"
        >
          Projetos
        </Text>
      </Flex>
      <Grid
        alignItems="center"
        justifyContent="center"
        m="50px 0 0 30px"
        templateColumns="repeat(5,1fr)"
        overflowX=""
        gap={6}
      >
        <Box>
          <Image
            objectFit="cover"
            alt="Br_desafio"
            w="14rem"
            h="10rem"
            src="/imagens/brDesafio.png"
            borderRadius="8px"
          />
          <Text>Cadastro de empresas</Text>
        </Box>

        <Box>
          <Image
            objectFit="cover"
            w="14rem"
            h="10rem"
            src="/imagens/junkesLista.png"
            borderRadius="8px"
          />
          <Text>Lista de Afazeres</Text>
        </Box>
        <Box>
          <Image
            borderRadius="8px"
            objectFit="cover"
            w="14rem"
            h="10rem"
            src="/imagens/motoCalc1.png"
          />
          <Text>Motora-Calc</Text>
        </Box>

        <Box>
          <Image
            alt="gall-store"
            objectFit="cover"
            w="14rem"
            src="/imagens/gall-Store.png"
            borderRadius="8px"
          />
          <Text>Site E-commerce</Text>
        </Box>
        <Box>
          <Image
            alt="doceria-Mel"
            objectFit="cover"
            w="14rem"
            src="/imagens/doceriaMel.png"
            borderRadius="8px"
          />
          <Text>site-Doceria-da-Mel</Text>
        </Box>
      </Grid>
      <Link href="#containerGrid">
        <Button
          bg="#f95106"
          borderRadius="full"
          type="button"
          position="absolute"
          right="50px"
          _hover={{ bg: "orange.400" }}
          color="gray.900"
        >
          <BsTriangleFill style={{ fontSize: "16px" }} />
        </Button>
      </Link>
      <Divider w="80%" m="130px auto" />
      <Flex
        flexDirection="column"
        mt="100px"
        alignItems="center"
        justifyContent="center"
        h="200px"
        bg="gray.800"
        id="contato"
      >
        <Text
          borderBottom="1px solid"
          borderBottomColor="#f95106"
          fontSize="2xl"
        >
          Contato
        </Text>
        <Flex color="#f95106" mt="40px">
          <HStack fontSize="20px" spacing={4}>
            <BsLinkedin />
            <BsGithub />
            <BsWhatsapp />
          </HStack>
        </Flex>
        <Text mt="15px">leojn8@gmail.com</Text>
      </Flex>
    </>
  );
};
export default Content;
