import { PopperContentProps } from "@radix-ui/react-tooltip";
import { forwardRef } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type PartialTooltipContentProps = Pick<
  PopperContentProps,
  "side" | "align" | "sideOffset" | "alignOffset"
>;

type HintProps = {
  hint: string;
  children: React.ReactNode;
} & PartialTooltipContentProps;

const Hint = forwardRef(function Hint(
  { hint, children, ...rest }: HintProps,
  ref
) {
  return (
    <Tooltip delayDuration={100}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className="bg-black border-black text-white" {...rest}>
        <p className="font-semibold capitalize">{hint}</p>
      </TooltipContent>
    </Tooltip>
  );
});

export default Hint;
