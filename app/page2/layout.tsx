"use client";

import type { PropsWithChildren } from "react";

const RootLayout: React.FC<PropsWithChildren> = (props) => {
  return <div>{props.children}</div>;
};

export default RootLayout;
