import React from 'react';
import { Helmet } from 'react-helmet';

import Logo from './Logo';
import logoResponsive from "../images/logo-BN-50.webp"

import "../styles/MetaData.css";

function MetaData() {
  return (
    <>
      <Helmet>
        <title>Brunet Nicolas - Développeur Web</title>
        <meta name="description" content="Portfolio du développeur web, BRUNET Nicolas" />
        <link rel="preload" href={logoResponsive} as="image" />

        <meta property="og:title" content="Développeur Web, BRUNET Nicolas" />
        <meta property="og:description" content="Site du développeur Web BRUNET Nicolas" />
        <meta property="og:url" content="URL de votre page" />
        <meta property="og:image" content={Logo} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Développeur Web BRUNET Nicolas" />

        <meta property="instagram:card" content="summary_large_image" />
        <meta property="instagram:site" content="@votre_nom_utilisateur" />
        <meta property="instagram:title" content="Développeur Web, BRUNET Nicolas" />
        <meta property="instagram:description" content="Site du développeur Web BRUNET Nicolas" />
        <meta property="instagram:image" content={Logo} />

        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet"/>
        <meta name="google-site-verification" content="2L5rLZXSAnoQVXPgJPmimIojj1tShdHdTdjLn8p-ix4" />
        <script>
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TLFVDNV5');
          `}
        </script>
      </Helmet>
    </>
  );
}

export default MetaData;