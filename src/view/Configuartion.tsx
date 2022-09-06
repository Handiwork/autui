import {
  AbsoluteLayout,
  Container,
  createColors,
  FlatButton,
  H2,
  InversedFlatButton,
  OutlinedInput,
  useThemeUpdater,
  VerticalDivider,
  XFlexBox,
} from "autui";
import { produce } from "immer";
import { useForm } from "react-hook-form";
import styled, { useTheme } from "styled-components";
import DraggableWindow from "../../lib/virtual-screen/DraggableWindow";
import { useScreen } from "../../lib/virtual-screen/VirtualScreen";

export default function Configuartion() {
  const theme = useTheme();
  const update = useThemeUpdater();
  const { register, getValues, watch } = useForm({
    defaultValues: {
      root: theme.fontSizes.root.replace("%", ""),
      primary: theme.colors.primary,
    },
  });
  const watchedFields = watch();
  return (
    <AbsoluteLayout top="48px">
      <ConfigSection>
        <H2>Theme Settings</H2>
        <XFlexBox>
          primary color:
          <OutlinedInput type="color" {...register("primary")} />
          {watchedFields.primary}
        </XFlexBox>
        <XFlexBox>
          root font size:
          <OutlinedInput
            type="range"
            min="50"
            max="100"
            {...register("root")}
          />
          {watchedFields.root}%
        </XFlexBox>
        <InversedFlatButton
          onClick={() =>
            update(
              produce((t) => {
                t.colors = createColors(getValues("primary"));
                t.fontSizes.root = `${getValues("root")}%`;
              })
            )
          }
        >
          Apply
        </InversedFlatButton>
      </ConfigSection>
      <VerticalDivider />
      <TestSection />
    </AbsoluteLayout>
  );
}

const ConfigSection = styled(Container)`
  > label {
    display: block;
  }
`;

function TestSection() {
  const { manager } = useScreen();
  return (
    <FlatButton
      onClick={() =>
        manager.create(
          <DraggableWindow>
            <h1>Hello world</h1>
          </DraggableWindow>
        )
      }
    >
      open window
    </FlatButton>
  );
}
