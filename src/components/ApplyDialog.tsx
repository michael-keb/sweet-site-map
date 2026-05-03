import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  children: ReactNode;
}

export const ApplyDialog = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">TBC</DialogTitle>
          <DialogDescription className="text-base text-gray-500 leading-relaxed pt-2">
            This is to apply for finance only — not to enrol in the program. The finance application form is coming soon.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
