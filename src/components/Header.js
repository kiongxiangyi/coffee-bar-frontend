import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="block">
      <div>
        <h1 className="header">{t('title')}</h1>
      </div>
    </header>
  );
}
