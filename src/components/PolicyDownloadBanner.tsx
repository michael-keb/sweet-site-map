import { FileText } from "lucide-react";

interface Props {
  href: string;
  label?: string;
}

export function PolicyDownloadBanner({ href, label = "Download official document (DOCX)" }: Props) {
  return (
    <div className="mb-10 pb-8 border-b border-border flex flex-wrap items-center gap-3">
      <FileText className="h-5 w-5 text-accent shrink-0" aria-hidden />
      <span className="text-lg text-gray-700">
        <a
          href={href}
          className="text-accent underline underline-offset-4 font-medium hover:opacity-80"
          download
        >
          {label}
        </a>
      </span>
    </div>
  );
}
