import { cloneElement, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { PureButton } from "../button";
import { floatEffect } from "../effects";
import { useDraggingEffect } from "../hooks/drag";
import { useStateDiff } from "../hooks/transition";
import { H5 } from "../html";
import { VerticalDivider } from "../layout";
import { useWindowManager } from "./VirtualScreen";
import { useWindow, useWindowController } from "./window-context";

export interface DraggableWindowProps {
  children: ReactNode;
  title?: string;
  restoreController?: ReactElement;
  maximizeController?: ReactElement;
  closeController?: ReactElement;
}

export default function DraggableWindow(props: DraggableWindowProps) {
  const {
    title,
    children,
    restoreController = <PureButton>restore</PureButton>,
    maximizeController = <PureButton>maximize</PureButton>,
    closeController = <PureButton>Close</PureButton>,
  } = props;
  const { x0, y0, x1, y1, z, mode } = useWindow();
  const width = x1 - x0;
  const height = y1 - y0;
  const controller = useWindowController();
  const manager = useWindowManager();
  const modeDiff = useStateDiff(mode);
  const style =
    mode === "MAXIMIZED"
      ? {
          left: 0,
          top: 0,
          ...manager.screenSize,
          transition: "all ease-in-out .23s",
        }
      : {
          left: x0,
          top: y0,
          width,
          height,
        };
  return (
    <DraggableWindowWrapper
      style={{
        ...style,
        zIndex: z * 1000,
        transition: modeDiff ? "all ease-in-out .23s" : undefined,
      }}
      onMouseDownCapture={() => controller.focus()}
    >
      <TitleBar
        title={title ?? "untitled"}
        actions={
          <>
            {mode !== "MAXIMIZED" &&
              cloneElement(maximizeController, {
                onClick: () =>
                  controller.update((s) => ({
                    ...s,
                    mode: "MAXIMIZED",
                  })),
              })}
            {mode !== "NORMAL" &&
              cloneElement(restoreController, {
                onClick: () =>
                  controller.update((s) => ({
                    ...s,
                    mode: "NORMAL",
                  })),
              })}
            {cloneElement(closeController, { onClick: controller.close })}
          </>
        }
      />
      <VerticalDivider />
      <div style={{ flex: "1 1 auto" }}>{children}</div>
      <BottomRightResizeHandler thickness={16} />
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
      onContextMenu={(e) => {
        e.preventDefault();
      }}
      onMouseDown={startDrag}
      onDoubleClick={() =>
        controller.update((s) => ({
          ...s,
          mode: s.mode === "MAXIMIZED" ? "NORMAL" : "MAXIMIZED",
        }))
      }
    >
      <H5 style={{ flex: "1 1 auto" }}>{title}</H5>
      {actions}
    </div>
  );
}

function BottomRightResizeHandler(props: { thickness: number }) {
  const { thickness } = props;
  const offset = thickness / 2;
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
        transform: `translate(-${offset}px, -${offset}px)`,
        cursor: "se-resize",
      }}
    />
  );
}
