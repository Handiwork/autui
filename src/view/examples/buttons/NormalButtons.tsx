import React, { ReactElement } from "react";
import { Button } from "autui";
import { FaShare } from "react-icons/fa";

export default function NormalButtons(): ReactElement {
  return (
    <div>
      <Button>
        <FaShare />
      </Button>

      <Button>Normal Button</Button>
    </div>
  );
}
