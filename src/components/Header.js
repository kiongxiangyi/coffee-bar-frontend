import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <>
      <header className="block">
        <div className="logo">
          <img
            src="/images/Guehring-Logo.jpg"
            className="mobile"
            alt="logo"
          ></img>
        </div>
        <div>
          <h1 className="header">{t("title")}</h1>
        </div>
      </header>
    </>
  );
}
