import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <>
      <div className="block">
        <h1>{t("title")}</h1>
      </div>
    </>
  );
}
