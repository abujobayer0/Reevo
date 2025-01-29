"use client";
import * as React from "react";

type Props = {
  params: {
    workspaceId: string;
  };
};

const WorkspacePage = async ({ params }: Props) => {
  const { workspaceId } = params;

  return (
    <div>
      <h1>Workspace: {workspaceId}</h1>
    </div>
  );
};

export default WorkspacePage;
