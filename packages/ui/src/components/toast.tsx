import type { ReactElement } from "react";
import { Toaster as Sonner } from "sonner";

export type ToastTheme = "light" | "dark" | "system";

export function Toaster({
  theme = "system"
}: {
  theme?: ToastTheme;
}): ReactElement {
  return (
    <Sonner
      theme={theme}
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "border border-border bg-background text-foreground shadow-lg",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-muted text-foreground"
        }
      }}
    />
  );
}

