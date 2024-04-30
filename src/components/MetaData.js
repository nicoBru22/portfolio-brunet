import React from 'react';
import { Helmet } from 'react-helmet';
import "../styles/MetaData.css";

function MetaData() {
  return (
    <>
      <Helmet>
        <title>Brunet Nicolas - Développeur Web</title>
        <meta name="description" content="Description de la page" />
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