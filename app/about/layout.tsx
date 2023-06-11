import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>about navbar</nav>
      <main>{children}</main>
    </>
  );
}
