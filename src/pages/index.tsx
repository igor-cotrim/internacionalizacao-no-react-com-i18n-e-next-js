import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useTranslation } from "react-i18next";

import { loadTranslation } from "../utils/translations";
import Header from "../components/Header";
import { useState } from "react";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslation(locale!, ["home"])),
    },
  };
};

export default function Home() {
  const [messagesCounter, setMessagesCounter] = useState(0);
  const { t } = useTranslation("home");

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <h1>{t("title")}</h1>
      <h3>{t("description")}</h3>

      <p>
        {t("unreadMessages", {
          count: messagesCounter,
        })}
      </p>

      <button onClick={() => setMessagesCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setMessagesCounter((prev) => prev - 1)}>-</button>

      <Link href="/contact">{t("contactLink")}</Link>
    </div>
  );
}
