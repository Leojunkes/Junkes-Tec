import Head from "next/head";
import Image from "next/image";

import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import Content from "../componentes/content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Template-Next-React</title>
      </Head>
      <Content/>
    </>
  );
}
