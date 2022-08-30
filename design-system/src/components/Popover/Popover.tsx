import * as PopoverPrimitive from "@radix-ui/react-popover";
import { AnimatePresence } from "framer-motion";
import { createContext, forwardRef, useContext, useState } from "react";
import { vars } from "../../styles";
import { MotionBox } from "../Box";

type PopoverContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const PopoverContext = createContext<PopoverContextType>({
  isOpen: false,
  setIsOpen: (open: boolean) => {},
});

export const Popover = forwardRef(({ children, ...props }, forwardedRef) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PopoverContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      <PopoverPrimitive.Root
        open={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </PopoverPrimitive.Root>
    </PopoverContext.Provider>
  );
});

Popover.Trigger = PopoverPrimitive.Trigger;
Popover.Content = forwardRef(({ children, ...props }, forwardedRef) => {
  const { isOpen } = useContext(PopoverContext);
  return (
    <AnimatePresence>
      {isOpen && (
        <PopoverPrimitive.Content
          sideOffset={16}
          {...props}
          ref={forwardedRef}
          asChild
        >
          <MotionBox
            backgroundColor="background"
            boxShadow="medium"
            padding={8}
            zIndex="1"
            borderRadius="huge"
            initial={{ scale: 0.9, y: 10, opacity: 0 }}
            exit={{ scale: 0.9, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.4 }}
            key="popover"
          >
            {children}
            <PopoverPrimitive.Arrow style={{ fill: vars.colors.background }} />
          </MotionBox>
        </PopoverPrimitive.Content>
      )}
    </AnimatePresence>
  );
});
