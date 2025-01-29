"use client";

import { getWorkSpaces } from "@/actions/workspace";
import { WorkspaceProps } from "@/app/types/index.types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useQueryData } from "@/hooks/useQueryData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Modal from "../modal";
import { PlusCircle } from "lucide-react";
import Search from "../search";

type Props = {
  actionWorkspaceId: string;
};

const Sidebar = ({ actionWorkspaceId }: Props) => {
  const router = useRouter();

  const { data, isFetched } = useQueryData(["user-workspaces"], getWorkSpaces);

  const workspaces = data as WorkspaceProps;

  const onWorkspaceChange = (value: string) => {
    router.push(`/dashboard/${value}`);
  };

  return (
    <div className="bg-[#111111] flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-hidden">
      <div className="bg-[#111111] p-4 gap-2 justify-center items-center flex mb-4 absolute top-0 left-0 right-0 ">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <p className="text-2xl">Jellyfish</p>
      </div>
      <Select
        defaultValue={actionWorkspaceId}
        onValueChange={onWorkspaceChange}
      >
        <SelectTrigger className="mt-16 text-neutral-400 bg-transparent">
          <SelectValue placeholder="Select a workspace">
            Select a workspace
          </SelectValue>
        </SelectTrigger>

        <SelectContent className="bg-[#111111] backdrop-blur-xl">
          <SelectGroup>
            <SelectLabel>Workspaces</SelectLabel>
            <Separator />
            {workspaces.data.workspace.map((workspace) => (
              <SelectItem key={workspace.id} value={workspace.id}>
                {workspace.name}
              </SelectItem>
            ))}
            {workspaces.data.members.length > 0 &&
              workspaces.data.members.map(
                (workspace) =>
                  workspace.WorkSpace && (
                    <SelectItem
                      value={workspace.WorkSpace.id}
                      key={workspace.WorkSpace.id}
                    >
                      {workspace.WorkSpace.name}
                    </SelectItem>
                  )
              )}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Modal
        description="Invite other users to your workspace"
        title="Invite To Workspace"
        trigger={
          <span className="text-sm cursor-pointer flex items-center justify-center bg-neutral-800/90  hover:bg-neutral-800/60 w-full rounded-sm p-[5px] gap-2">
            <PlusCircle
              size={15}
              className="text-neutral-800/90 fill-neutral-500"
            />
            <span className="text-neutral-400 font-semibold text-xs">
              Invite To Workspace
            </span>
          </span>
        }
      >
        <Search workspaceId={actionWorkspaceId} />
      </Modal>
    </div>
  );
};

export default Sidebar;
