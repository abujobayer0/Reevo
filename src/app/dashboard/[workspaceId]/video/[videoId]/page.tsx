import { getUserProfile, getVideoComments } from "@/actions/user";
import { getPreviewVideo } from "@/actions/workspace";
import VideoPreview from "@/components/global/Videos/video-preview";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

type Props = { params: { videoId: string } };

const Page = async (props: Props) => {
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
      <VideoPreview videoId={props.params.videoId} />
    </HydrationBoundary>
  );
};

export default Page;
