import { getUserProfile, getVideoComments } from "@/actions/user";
import { getPreviewVideo } from "@/actions/workspace";
import VideoPreview from "@/components/global/Videos/video-preview";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const Page = async (props: any) => {
  const query = new QueryClient();
  await query.prefetchQuery({
    queryKey: ["preview-video", props.params.videoId],
    queryFn: () => getPreviewVideo(props.params.videoId),
  });

  await query.prefetchQuery({
    queryKey: ["user-profile"],
    queryFn: getUserProfile,
  });

  await query.prefetchQuery({
    queryKey: ["video-comments"],
    queryFn: () => getVideoComments(props.params.videoId),
  });
  const dehydratedState = dehydrate(query);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="px-10 ">
        <VideoPreview videoId={props.params.videoId} />
      </div>
    </HydrationBoundary>
  );
};

export default Page;
