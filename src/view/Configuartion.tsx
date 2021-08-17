import {
  AbsoluteLayout,
  Button,
  Container,
  createColors,
  OutlinedInput,
  useTheme,
  useThemeUpdater,
} from "autui";
import React, { useState } from "react";
import styled from "styled-components";

export default function Configuartion() {
  const theme = useTheme();
  const update = useThemeUpdater();
  const [rootSize, setRootSize] = useState(
    theme.fontSizes.root.replace("%", "")
  );
  const [primary, setPrimary] = useState(theme.colors.primary);
  return (
    <AbsoluteLayout top="48px">
      <ConfigSection>
        <label>
          primary color:
          <OutlinedInput
            type="color"
            value={primary}
            onChange={(e) => setPrimary(e.target.value)}
          />
          {primary}
        </label>
        <label>
          root font size:
          <OutlinedInput
            type="range"
            min="50"
            max="100"
            value={rootSize}
            onChange={(e) => setRootSize(e.target.value)}
          />
          {rootSize}%
        </label>
        <Button
          onClick={() =>
            update({
              ...theme,
              colors: createColors(primary),
              fontSizes: {
                ...theme.fontSizes,
                root: `${rootSize}%`,
              },
            })
          }
        >
          Apply
        </Button>
      </ConfigSection>
    </AbsoluteLayout>
  );
}

const ConfigSection = styled(Container)`
  > label {
    display: block;
  }
`;
