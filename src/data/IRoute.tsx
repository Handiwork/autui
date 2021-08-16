import { ComponentType } from "react";

export interface IRoute {
  path: string;
  title: string;
  component: ComponentType<any>;
}
