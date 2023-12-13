import React from "react";
import Head from "next/head";

const Seo = ({
  title = "Verbal",
  description = "This is Verbal, a b2b chatbot provider that aims to bring the oportunities and advantages of GPTs to small and medium sized businesses.",
  OGImage = "https://www.verbal.chat/logo.png",
  OGType = "website",
  canonicalUrl = "https://www.verbal.chat/",
  publishedDate = new Date(),
  children,
}) => {
  return (
    <React.Fragment>
      <Head>
        {/* basic metadata */}
        <title>{`${title} | Verbal`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Verbal" />
        <meta name="author" content="Verbal" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* twitter metadata */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Verbal" />
        <meta name="twitter:creator" content="@Verbal" />
        <meta name="twitter:title" content="Verbal" />
        <meta
          name="twitter:description"
          content="Empower Your Enterprise with Smart Dialogues Fueled by Verbal.chat"
        />
        <meta
          name="twitter:image"
          content="https://www.verbal.chat/logo.png"
        />

        {/* canonical link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* open graph metadata */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={OGType} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OGImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:section" content={title} />
        <meta property="article:published_time" content={publishedDate} />
        {children}
      </Head>
    </React.Fragment>
  );
};

export default Seo;
