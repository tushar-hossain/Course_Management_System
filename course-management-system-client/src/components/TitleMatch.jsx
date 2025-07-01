import React, { useEffect, useState } from "react";
import { useMatches } from "react-router";
import { Helmet } from "react-helmet";

const TitleMatch = () => {
  const matches = useMatches();
  const [title, setTitle] = useState(null);

  useEffect(() => {
    const match = matches.find((m) => m.handle?.title);
    if (match) {
      setTitle((document.title = match.handle.title));
    } else {
      setTitle((document.title = "BD Programming"));
    }
  }, [matches]);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default TitleMatch;
