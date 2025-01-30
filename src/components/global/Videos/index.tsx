"use client";
import React from "react";
import { getAllUserVideos } from "@/actions/workspace";
import VideoRecorderDuotone from "@/components/icons/video-recorder-duotone";
import { useQueryData } from "@/hooks/useQueryData";
import { cn } from "@/lib/utils";

import { VideosProps } from "@/app/types/index.types";
import VideoCard from "./video-card";

type Props = {
  folderId: string;
  videosKey: string;
  workspaceId: string;
};
const video = {
  User: {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://www.example.com/image.jpg",
    firstName: "John",
    lastName: "Doe",
  },
  id: "1",
  title: "Video 1",
  processing: false,
  source: "https://www.example.com/video.mp4",
  workspaceId: "1",
  folderId: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
  Folder: {
    id: "1",
    name: "Folder 1",
  },
};

const Videos = ({ folderId, videosKey, workspaceId }: Props) => {
  const { data: videoData } = useQueryData([videosKey], () =>
    getAllUserVideos(folderId)
  );

  const { status: videosStatus, data: videos } = videoData as VideosProps;

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <VideoRecorderDuotone />
          <h2 className="text-[#BdBdBd] text-xl">Videos</h2>
        </div>
      </div>
      <section
        className={cn(
          videosStatus !== 200
            ? "p-5"
            : "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        )}
      >
        {videosStatus === 200 ? (
          videos.map((video) => (
            <VideoCard key={video.id} workspaceId={workspaceId} {...video} />
          ))
        ) : (
          <p className="text-[#BDBDBD]"> No videos in workspace</p>
        )}
      </section>
    </div>
  );
};

export default Videos;
