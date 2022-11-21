import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: 20,
        background: "lightcoral",
      }}
    >
      <Link href="/">Home</Link>

      <div>
        {router.locales?.map((lng) => {
          return (
            <Link
              key={lng}
              locale={lng}
              href={router.basePath}
              style={{
                textDecoration: lng === i18n.language ? "underline" : "none",
                padding: 5,
              }}
            >
              {lng.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
