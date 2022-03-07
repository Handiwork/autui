import {
  AbsoluteLayout,
  InversedFlatButton,
  Container,
  createColors,
  OutlinedInput,
  useForm,
  useTheme,
  useThemeUpdater,
} from "autui";
import styled from "styled-components";

export default function Configuartion() {
  const theme = useTheme();
  const update = useThemeUpdater();
  const [form, binders] = useForm({
    root: theme.fontSizes.root.replace("%", ""),
    primary: theme.colors.primary,
  });
  return (
    <AbsoluteLayout top="48px">
      <ConfigSection>
        <label>
          primary color:
          <OutlinedInput type="color" {...binders.primary} />
          {form.primary}
        </label>
        <label>
          root font size:
          <OutlinedInput type="range" min="50" max="100" {...binders.root} />
          {form.root}%
        </label>
        <InversedFlatButton
          onClick={() =>
            update((t) => ({
              ...t,
              colors: createColors(form.primary),
              fontSizes: {
                ...t.fontSizes,
                root: `${form.root}%`,
              },
            }))
          }
        >
          Apply
        </InversedFlatButton>
      </ConfigSection>
    </AbsoluteLayout>
  );
}

const ConfigSection = styled(Container)`
  > label {
    display: block;
  }
`;
