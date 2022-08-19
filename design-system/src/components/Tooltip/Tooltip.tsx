import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Box } from "../Box";

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  sideOffset?: number;
} & TooltipPrimitive.TooltipContentProps;

export const Tooltip = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration = 0,
  sideOffset = 8,
  ...props
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        side="top"
        align="center"
        sideOffset={sideOffset}
        asChild
        {...props}
      >
        <Box
          backgroundColor="code"
          color="white"
          paddingX={4}
          paddingY={2}
          borderRadius="rounded"
          fontSize="small"
        >
          {content}
          <TooltipPrimitive.Arrow width={11} height={5} />
        </Box>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
};

Tooltip.Provider = TooltipPrimitive.Provider;
