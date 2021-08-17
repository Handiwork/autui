import { ComponentType, ReactNode } from "react";

export interface IRoute {
  path: string;
  title: ReactNode;
  component: ComponentType<any>;
}
