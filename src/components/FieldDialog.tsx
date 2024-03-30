import * as Dialog from "@radix-ui/react-dialog";
import { FieldMetadata } from "@conform-to/react";
import { useState } from "react";

export const FieldDialog = ({ children, meta }: { children: React.ReactNode, meta: FieldMetadata<string | Date> }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleInputFocus = () => {
        setIsOpen(true);
        // Focus logic or other relevant actions on input focus
    };

    return (<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
            <div onFocus={handleInputFocus}>{children}</div>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4">
                {children}
                <Dialog.Close>Close</Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>)

};