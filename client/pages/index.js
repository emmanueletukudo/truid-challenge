import Head from "next/head";
import {
  Heading,
  Link,
  Text
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Form from "./components/Form";

export default function Home({}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emmanuel Etukudo - tru.ID developer experience challenage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/tru-ID.png" alt="tru.ID Logo" className={styles.logo} />
        <Heading as="h1">Verify your SIM</Heading>

        <Text className={styles.description} fontSize="sm">
          Enter your phone number to continue.
        </Text>
       <Form/>
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
