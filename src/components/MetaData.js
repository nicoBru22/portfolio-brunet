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
        
      </Helmet>
    </>
  );
}

export default MetaData;