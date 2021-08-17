import React, { ReactElement } from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  noSuffix?: boolean;
}

export default function HelmetTitle({ title, noSuffix }: Props): ReactElement {
  return (
    <Helmet>
      <title>
        {title}
        {!noSuffix && ` - Autui`}
      </title>
    </Helmet>
  );
}
