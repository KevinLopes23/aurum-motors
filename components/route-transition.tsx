import { ViewTransition } from "react";
import type { ReactNode } from "react";

const directional = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;

export function RouteTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter={directional} exit={directional} default="none">
      {children}
    </ViewTransition>
  );
}
