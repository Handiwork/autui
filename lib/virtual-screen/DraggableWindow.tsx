import { ReactNode, useRef } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { PureButton } from "../button";
import { floatEffect } from "../effects";
import { H5 } from "../html";
import { VerticalDivider } from "../layout";
import { useWindow, useWindowController } from "./window-context";

export interface DraggableWindowProps {
  children: ReactNode;
  title?: string;
}

export default function DraggableWindow(props: DraggableWindowProps) {
  const { x, y, z, width, height } = useWindow();
  const controller = useWindowController();
  const ref = useRef(null);
  return (
    <Draggable
      defaultPosition={{ x, y }}
      onStart={(_, { x: nx, y: ny }) => {
        controller.moveTo(nx, ny);
      }}
      onStop={(_, { x: nx, y: ny }) => {
        controller.moveTo(nx, ny);
      }}
      nodeRef={ref}
      handle={`[data-draggable="true"`}
    >
      <DraggableWindowWrapper
        width={width}
        height={height}
        z={z * 1000}
        ref={ref}
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
      </DraggableWindowWrapper>
    </Draggable>
  );
}

const DraggableWindowWrapper = styled.div<{
  width: number;
  height: number;
  z: number;
}>`
  ${floatEffect}
  background-color: ${(p) => p.theme.colors.surface};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: ${(p) => p.theme.spacing.containerPadding};

  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  z-index: ${(p) => p.z};

  display: flex;
  flex-direction: column;
  position: fixed;
`;

function TitleBar(props: { title: string; actions?: ReactNode }) {
  const { title, actions = [] } = props;
  return (
    <div style={{ display: "flex" }} data-draggable="true">
      <H5 style={{ flex: "1 1 auto" }}>{title}</H5>
      {actions}
    </div>
  );
}
