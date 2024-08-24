"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function PageModal({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const router = useRouter();
  const { onOpenChange } = useDisclosure();

  function onDismiss() {
    router.back();
  }

  return (
    <Modal
      size="4xl"
      onOpenChange={onOpenChange}
      scrollBehavior={"outside"}
      placement="center"
      backdrop="blur"
      onClose={onDismiss}
      defaultOpen={true}
      className="overflow-x-hidden"
      portalContainer={document.getElementById("modal-root") as HTMLElement}
    >
      <ModalContent>
        {(onDismiss) => (
          <>
            <ModalHeader className="border-b-1">
              <h1 className="text-lg md:text-xl lg:text-2xl">{title}</h1>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={onDismiss}>
                返回
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
