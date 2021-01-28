import Head from "next/head";
import {
  Heading,
  Link,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { PhoneIcon} from '@chakra-ui/icons'
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emmanuel Etukudo - tru.ID developer experience challenage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/tru-ID.png" alt="tru.ID Logo" className={styles.logo} />
        <Heading as="h1">Verify your sim</Heading>

        <Text className={styles.description} fontSize="sm">
          Enter your phone number to continue.
        </Text>

        <Stack spacing={7} className={styles.form}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" 
            children={<PhoneIcon/>}
            />
            <Input type="tel" placeholder="Phone number" />
            {' '}
          </InputGroup>
          <Button colorScheme="blue" isFullWidth="true">Verify</Button>
        </Stack>
      </main>

      <footer className={styles.footer}>
        <Link href="http://tru.id" target="_blank" rel="noopener noreferrer">
          Verified by <Heading fontSize="md">tru.ID</Heading>{" "}
          <img
            src="/tru-ID.png"
            alt="Vercel Logo"
            className={styles.logoFooter}
          />
        </Link>
      </footer>
    </div>
  );
}
