import { getAllUserVideos, getFolderInfo } from "@/actions/workspace";
import FolderInfo from "@/components/global/folders/folder-info";
import Videos from "@/components/global/Videos";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

type Props = { params: { folderId: string; workspaceId: string } };

const Page = async (props: Props) => {
  const { folderId, workspaceId } = props.params;
  const query = new QueryClient();

  await query.prefetchQuery({
    queryKey: ["folder-videos"],
    queryFn: () => getAllUserVideos(folderId),
  });

  await query.prefetchQuery({
    queryKey: ["folder-info"],
    queryFn: () => getFolderInfo(folderId),
  });

  const dehydratedState = dehydrate(query);

  return (
    <HydrationBoundary state={dehydratedState}>
      <FolderInfo folderId={folderId} />
      <Videos
        folderId={folderId}
        workspaceId={workspaceId}
        videosKey="folder-videos"
      />
    </HydrationBoundary>
  );
};

export default Page;
