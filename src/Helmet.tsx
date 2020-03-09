import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Helm = (): React.ReactElement => {
  const { t, i18n } = useTranslation();

  return (
    <Helmet defaultTitle={`${t('app.name')}`} titleTemplate={`${t('app.name')} — %s`}>
      <html lang={i18n.language} />
      <title>{t('app.title')}</title>
      <meta name="description" content={t('app.description')} />
      <meta name="keywords" content={t('app.keywords')} />
    </Helmet>
  );
};

export default Helm;
