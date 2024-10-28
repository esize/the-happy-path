"use client";

import { useRouter } from "next/navigation";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { Button } from "./button";

export default function Modal({
  // We pass the children and className as a prop to keep modal reusable.
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  // This will change the URL to the previous state, for example if we have navigated to the login page from `/` route, when the function will trigger the URL will be changed from `/login` to `/`.
  function handleOpenChange() {
    router.back();
  }
  return (
    // We are using the shadcn ui's dialog component
    <Dialog
      // It will be open by default.
      defaultOpen={true}
      // It needs to be set in order to be able to use onOpenChange handler (https://www.radix-ui.com/primitives/docs/components/dialog#dialog)
      open={true}
      // This will trigger whenever we close the modal by clicking outside the modal or by clicking on the cross button
      onOpenChange={handleOpenChange}
    >
      <DialogContent className={cn(className, "z-[9001] w-[600px]")}>
        <VisuallyHidden.Root asChild>
          <DialogTitle>Modal</DialogTitle>
        </VisuallyHidden.Root>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export function ModalClose({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <DialogClose asChild className={className}>
      {children || <Button variant={"outline"}>Close</Button>}
    </DialogClose>
  );
}

export function ModalTitle({ children }: { children: React.ReactNode }) {
  return (
    <DialogTitle className="mb-4 text-2xl font-semibold">
      {children}
    </DialogTitle>
  );
}
