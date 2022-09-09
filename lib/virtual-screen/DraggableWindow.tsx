import { ReactNode } from "react";
import styled from "styled-components";
import { PureButton } from "../button";
import { floatEffect } from "../effects";
import { useDraggingEffect } from "../hooks/drag";
import { H5 } from "../html";
import { VerticalDivider } from "../layout";
import { useWindow, useWindowController } from "./window-context";

export interface DraggableWindowProps {
  children: ReactNode;
  title?: string;
}

export default function DraggableWindow(props: DraggableWindowProps) {
  const { x0, y0, x1, y1, z } = useWindow();
  const width = x1 - x0;
  const height = y1 - y0;
  const controller = useWindowController();
  return (
    <DraggableWindowWrapper
      style={{ left: x0, top: y0, width, height, zIndex: z * 1000 }}
      onMouseDownCapture={() => controller.focus()}
    >
      <TitleBar
        title={props.title ?? "untitled"}
        actions={
          <PureButton onClick={() => controller.close()}>close</PureButton>
        }
      />
      <VerticalDivider />
      <div style={{ flex: "1 1 auto" }}>{props.children}</div>
      <BottomRightResizeHandler thickness={8} />
    </DraggableWindowWrapper>
  );
}

const DraggableWindowWrapper = styled.div`
  ${floatEffect}
  background-color: ${(p) => p.theme.colors.surface};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: ${(p) => p.theme.spacing.containerPadding};

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  position: fixed;
`;

function TitleBar(props: { title: string; actions?: ReactNode }) {
  const { title, actions = [] } = props;
  const controller = useWindowController();
  const startDrag = useDraggingEffect((e) => {
    controller.move(e.movementX, e.movementY);
  });

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      style={{ display: "flex", userSelect: "none" }}
      onMouseDown={startDrag}
    >
      <H5 style={{ flex: "1 1 auto" }}>{title}</H5>
      {actions}
    </div>
  );
}

function BottomRightResizeHandler(props: { thickness: number }) {
  const { thickness } = props;
  const controller = useWindowController();
  const startDrag = useDraggingEffect((e) => {
    controller.resize({ dx1: e.movementX, dy1: e.movementY });
  });
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onMouseDown={startDrag}
      style={{
        position: "absolute",
        top: "100%",
        left: "100%",
        width: thickness,
        height: thickness,
        cursor: "se-resize",
      }}
    />
  );
}
