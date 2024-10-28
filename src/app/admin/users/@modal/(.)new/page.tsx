"use client";

import Modal, { ModalTitle } from "@/components/ui/modal";

import NewUserForm from "./form";

export default function NewUserModalPage() {
  return (
    <Modal className="w-[600px]">
      <ModalTitle>New User</ModalTitle>
      <NewUserForm />
    </Modal>
  );
}
