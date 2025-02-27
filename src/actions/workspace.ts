"use server";

import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { sendEmail } from "./user";

export const verifyAccessToWorkspace = async (workspaceId: string) => {
  try {
    const user = await currentUser();
    if (!user) return { status: 403 };

    const isUserInWorkspace = await client.workSpace.findUnique({
      where: {
        id: workspaceId,
        OR: [
          {
            User: {
              clerkid: user.id,
            },
          },
          {
            members: {
              every: {
                User: {
                  clerkid: user.id,
                },
              },
            },
          },
        ],
      },
    });
    return {
      status: 200,
      data: { workspace: isUserInWorkspace },
    };
  } catch (_) {
    return {
      status: 403,
      data: { workspace: null },
    };
  }
};

export const getWorkspaceFolders = async (workSpaceId: string) => {
  try {
    const isFolders = await client.folder.findMany({
      where: {
        workSpaceId: workSpaceId,
      },
      include: {
        _count: {
          select: {
            videos: true,
          },
        },
      },
    });

    if (isFolders && isFolders.length > 0) {
      return {
        status: 200,
        data: isFolders,
      };
    }
    return {
      status: 404,
      data: [],
    };
  } catch (err) {
    return {
      status: 403,
      data: [],
    };
  }
};

export const getAllUserVideos = async (workSpaceId: string) => {
  try {
    const user = await currentUser();
    if (!user) return { status: 404 };

    const videos = await client.video.findMany({
      where: {
        OR: [{ workSpaceId: workSpaceId }, { folderId: workSpaceId }],
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
        source: true,
        processing: true,
        views: true,
        Folder: {
          select: {
            id: true,
            name: true,
          },
        },
        User: {
          select: {
            firstname: true,
            lastname: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    if (videos && videos.length > 0) {
      return {
        status: 200,
        data: videos,
      };
    }
    return { status: 404, data: [] };
  } catch (err) {
    return { status: 403, data: [] };
  }
};

export const getWorkSpaces = async () => {
  try {
    const user = await currentUser();

    if (!user) return { status: 404 };

    const workspaces = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
        workspace: {
          select: {
            id: true,
            name: true,
            type: true,
          },
        },
        members: {
          select: {
            WorkSpace: {
              select: {
                id: true,
                name: true,
                type: true,
              },
            },
          },
        },
      },
    });

    if (workspaces) {
      return { status: 200, data: workspaces };
    }
  } catch (_) {
    return { status: 400 };
  }
};

export const createWorkspace = async (name: string) => {
  try {
    const user = await currentUser();
    if (!user) return { status: 404 };

    const authorized = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    if (authorized?.subscription?.plan === "PRO") {
      const workspace = await client.user.update({
        where: {
          clerkid: user.id,
        },
        data: {
          workspace: {
            create: {
              name,
              type: "PUBLIC",
            },
          },
        },
      });

      if (workspace) {
        return { status: 201, data: "Workspace created successfully!" };
      }
    }
    return {
      status: 401,
      data: "You are not authorized to create a workspace",
    };
  } catch (_) {
    return { status: 400 };
  }
};
export const createFolder = async (workspaceId: string) => {
  try {
    const isNewFolder = await client.workSpace.update({
      where: {
        id: workspaceId,
      },
      data: {
        folders: {
          create: { name: "Untitled Folder" },
        },
      },
    });
    if (isNewFolder) {
      return { status: 200, message: "New Folder Created" };
    }
  } catch (_) {
    return { status: 500, message: "Oppse something went wrong" };
  }
};
export const getFolderInfo = async (folderId: string) => {
  try {
    const folder = await client.folder.findUnique({
      where: {
        id: folderId,
      },
      select: {
        name: true,
        _count: {
          select: {
            videos: true,
          },
        },
      },
    });
    if (folder)
      return {
        status: 200,
        data: folder,
      };
    return {
      status: 400,
      data: null,
    };
  } catch (_) {
    return {
      status: 500,
      data: null,
    };
  }
};
export const renameFolders = async (folderId: string, name: string) => {
  try {
    const folder = await client.folder.update({
      where: {
        id: folderId,
      },
      data: {
        name,
      },
    });
    if (folder) {
      return { status: 200, data: "Folder Renamed" };
    }
    return { status: 400, data: "Folder does not exist" };
  } catch (_) {
    return { status: 500, data: "Opps! something went wrong" };
  }
};
export const moveVideoLocation = async (
  videoId: string,
  workSpaceId: string,
  folderId: string | null
) => {
  try {
    const user = await currentUser();
    if (!user) return { status: 403, data: "Unauthorized" };

    // First verify if user has access to the workspace
    const hasAccess = await verifyAccessToWorkspace(workSpaceId);
    if (hasAccess.status !== 200) {
      return { status: 403, data: "No access to workspace" };
    }

    // Update video location
    const location = await client.video.update({
      where: {
        id: videoId,
      },
      data: {
        workSpaceId,
        folderId: folderId || null,
      },
    });

    if (location) {
      return {
        status: 200,
        data: "Video moved successfully",
      };
    }

    return {
      status: 404,
      data: "Video not found",
    };
  } catch (error) {
    console.error("Error moving video:", error);
    return {
      status: 500,
      data: "Failed to move video",
    };
  }
};

export const getPreviewVideo = async (videoId: string) => {
  try {
    const user = await currentUser();
    if (!user) return { status: 404 };
    const video = await client.video.findUnique({
      where: {
        id: videoId,
      },
      select: {
        title: true,
        createdAt: true,
        source: true,
        description: true,
        processing: true,
        views: true,
        summery: true,
        User: {
          select: {
            firstname: true,
            lastname: true,
            image: true,
            clerkid: true,
            trial: true,
            subscription: {
              select: {
                plan: true,
              },
            },
          },
        },
      },
    });
    if (video) {
      return {
        status: 200,
        data: video,
        author: user.id === video.User?.clerkid ? true : false,
      };
    }

    return { status: 404 };
  } catch (_) {
    return { status: 400 };
  }
};

export const sendEmailForFirstView = async (videoId: string) => {
  try {
    const user = await currentUser();
    if (!user) return { status: 404, message: "User not found" };

    const video = await client.video.findUnique({
      where: {
        id: videoId,
      },
      select: {
        title: true,
        views: true,
        User: {
          select: {
            email: true,
            clerkid: true,
            firstname: true,
            firstView: true,
          },
        },
      },
    });

    if (!video) return { status: 404, message: "Video not found" };
    if (!video.User?.firstView)
      return { status: 200, message: "First view notifications disabled" };
    if (video.views !== 0) return { status: 200, message: "Not first view" };

    await client.video.update({
      where: {
        id: videoId,
      },
      data: {
        views: 1,
      },
    });

    try {
      const { transporter, mailOptions } = await sendEmail(
        video.User.email!,
        "🎉 Congrats! Your Video Got Its First Viewer!",
        `Your video "${video.title}" just got its first view!`,

        `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; text-align: center;">
                <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                  <h2 style="color: #333;">🎉 Great News, ${video.User.firstname}! </h2>
                  <p style="font-size: 16px; color: #666;">Your video <strong>"${video.title}"</strong> just got its first view! 🚀</p>
                  
                  <div style="margin: 20px 0;">
                    <a href="${process.env.NEXT_PUBLIC_HOST_URL}/preview/${videoId}" 
                       style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; font-size: 16px; border-radius: 6px; display: inline-block;">
                      View Video
                    </a>
                  </div>
          
                  <p style="font-size: 14px; color: #999;">Keep uploading great content! The world is watching. 🌍</p>
          
                  <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;"/>
                  <p style="font-size: 12px; color: #888;">If you didn't upload this video, please ignore this message.</p>
                </div>
            </div>`
      );

      await client.$transaction(async (tx) => {
        await new Promise((resolve, reject) => {
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) reject(err);
            else resolve(info);
          });
        });

        await tx.user.update({
          where: {
            clerkid: video.User?.clerkid,
          },
          data: {
            notification: {
              create: {
                content: `Your video "${video.title}" just got its first view!`,
              },
            },
          },
        });
      });

      return { status: 200, message: "First view notification sent" };
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      return { status: 500, message: "Failed to send notification" };
    }
  } catch (error) {
    console.error("sendEmailForFirstView error:", error);
    return { status: 500, message: "Internal server error" };
  }
};
export const editVideoInfo = async (
  videoId: string,
  title: string,
  description: string
) => {
  try {
    const video = await client.video.update({
      where: { id: videoId },
      data: {
        title,
        description,
      },
    });
    if (video) return { status: 200, data: "Video successfully updated" };
    return { status: 404, data: "Video not found" };
  } catch (_) {
    return { status: 400 };
  }
};
