import Head from "next/head";
import { GetStaticProps } from "next";
import { useTranslation } from "react-i18next";

import { loadTranslation } from "../utils/translations";
import Header from "../components/Header";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslation(locale!, ["contact"])),
    },
  };
};

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>{t("title")}</h1>
    </div>
  );
}
