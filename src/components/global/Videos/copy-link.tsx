import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React from "react";
import { toast } from "sonner";

type Props = {
  videoId: string;
  className?: string;
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | null;
};

const CopyLink = (props: Props) => {
  const { videoId, className, variant } = props;
  const onClick = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_HOST_URL}/preview/${videoId}`
    );
    return toast.success("Copied to clipboard");
  };

  return (
    <Button variant={variant} className={className} onClick={onClick}>
      <Link size={18} className="text-[#a4a4a4]" />
    </Button>
  );
};

export default CopyLink;
