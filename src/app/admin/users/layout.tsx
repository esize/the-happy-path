import { ReactNode } from "react";

export default async function UserLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <div className="z-10">
      {children}
      {modal}
    </div>
  );
}
