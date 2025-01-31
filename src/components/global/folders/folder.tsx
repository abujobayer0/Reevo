"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import Loader from "../loader";
import FolderDuotone from "@/components/icons/folder-duotone";
import { useMutationData, useMutationDataState } from "@/hooks/useMutationData";
import { renameFolders } from "@/actions/workspace";
import { Input } from "@/components/ui/input";

type Props = {
  name: string;
  id: string;
  optimistic?: boolean;
  count?: number;
};

const Folder = ({ id, name, optimistic, count }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const folderCardRef = useRef<HTMLDivElement | null>(null);
  const pathName = usePathname();
  const router = useRouter();
  const [onRename, setOnRename] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const Rename = () => setOnRename(true);
  const Renamed = () => setOnRename(false);

  const { mutate, isPending } = useMutationData(
    ["rename-folders"],
    (data: { name: string }) => renameFolders(id, data.name),
    "workspace-folders",
    Renamed
  );

  const { latestVariables } = useMutationDataState(["rename-folders"]);

  const handleFolderClick = () => {
    if (onRename) return;
    router.push(`${pathName}/folder/${id}`);
  };

  const handleNameDoubleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    Rename();
  };

  const updateFolderName = (e: React.FocusEvent<HTMLInputElement>) => {
    if (inputRef.current?.value) {
      mutate({ name: inputRef.current.value });
    } else {
      Renamed();
    }
  };

  return (
    <div
      onClick={handleFolderClick}
      ref={folderCardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative flex cursor-pointer overflow-hidden transition-all duration-300",
        "items-center gap-3 justify-between min-w-[250px] py-4 px-5",
        "rounded-xl border bg-white/5 backdrop-blur-sm",
        "hover:bg-white/10 hover:border-[#8c52ff]/50",
        "hover:shadow-[0_0_20px_rgba(94,23,235,0.1)]",
        "group",
        optimistic && "opacity-60",
        isHovered ? "border-[#8c52ff]/50" : "border-white/10"
      )}
    >
      {/* Gradient Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-[#5e17eb]/20 blur-[100px]" />
        <div className="absolute -top-2 -left-2 w-32 h-32 bg-[#8c52ff]/20 blur-[100px]" />
      </div>

      <Loader state={isPending}>
        <div className="flex items-center gap-4 z-10">
          <div className="text-[#8c52ff] group-hover:text-[#5e17eb] transition-colors">
            <FolderDuotone />
          </div>

          <div className="flex flex-col gap-1">
            {onRename ? (
              <Input
                onBlur={updateFolderName}
                autoFocus
                placeholder={name}
                className="border-none text-base w-full outline-none text-white 
                         bg-white/5 p-1 px-2 rounded-md
                         focus:ring-2 focus:ring-[#8c52ff] transition-all duration-300"
                ref={inputRef}
              />
            ) : (
              <p
                onClick={(e) => e.stopPropagation()}
                className="text-white/90 font-medium transition-all duration-300 
                         group-hover:text-white select-none"
                onDoubleClick={handleNameDoubleClick}
              >
                {latestVariables?.status === "pending" &&
                latestVariables?.variables.id === id
                  ? latestVariables.variables.name
                  : name}
              </p>
            )}
            <span className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
              {count || 0} videos
            </span>
          </div>
        </div>
      </Loader>

      {/* Hover Indicator */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#5e17eb] to-[#8c52ff]"></div>
      </div>
    </div>
  );
};

export default Folder;
