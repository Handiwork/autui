import React, { ReactElement } from "react";
import { FaCodeBranch, FaShare } from "react-icons/fa";
import { ContentButton } from "autui";

export default function ContentButtons(): ReactElement {
  return (
    <div>
      <ContentButton>
        <FaShare />
      </ContentButton>
      <ContentButton>
        <FaCodeBranch />
      </ContentButton>
      <ContentButton>text</ContentButton>
    </div>
  );
}
