"use server";

import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import nodemailer from "nodemailer";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_CLIENT_SECRET as string);

export const sendEmail = async (
  to: string,
  subject: string,
  text: string,
  html?: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_MAILER_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: `"Reevo" <${process.env.NEXT_PUBLIC_MAILER_EMAIL}>`,
    to,
    subject,
    text,
    html,
  };

  return { transporter, mailOptions };
};

export const onAuthenticatedUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 403 };
    }

    const existingUser = await client.user.findUnique({
      where: { clerkid: user.id },
      include: {
        workspace: {
          where: {
            User: {
              clerkid: user.id,
            },
          },
        },
      },
    });

    if (existingUser) {
      return { status: 200, user: existingUser };
    }

    const newUser = await client.user.create({
      data: {
        clerkid: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstname: user.firstName,
        lastname: user.lastName,
        image: user.imageUrl,
        studio: { create: {} },
        subscription: { create: {} },
        workspace: {
          create: {
            name: `${user.firstName}'s Workspace`,
            type: "PERSONAL",
          },
        },
      },
      include: {
        workspace: {
          where: {
            User: {
              clerkid: user.id,
            },
          },
        },
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    if (newUser) {
      return { status: 201, user: newUser };
    }
    return { status: 404 };
  } catch (_) {
    return { status: 500 };
  }
};

export const getNotifications = async () => {
  try {
    const user = await currentUser();
    if (!user) return { status: 404 };

    const notifications = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },

      select: {
        notification: true,
        _count: {
          select: {
            notification: true,
          },
        },
      },
    });
    if (notifications && notifications.notification.length > 0) {
      return { status: 200, data: notifications };
    }
    return { status: 404, data: [] };
  } catch (_) {
    return { status: 403 };
  }
};

export const searchUsers = async (query: string) => {
  try {
    const user = await currentUser();
    if (!user) return { status: 404 };

    const users = await client.user.findMany({
      where: {
        OR: [
          { firstname: { contains: query } },
          { email: { contains: query } },
          { lastname: { contains: query } },
        ],
        NOT: [
          {
            clerkid: user.id,
          },
        ],
      },
      select: {
        id: true,
        subscription: {
          select: {
            plan: true,
          },
        },
        firstname: true,
        lastname: true,
        email: true,
        image: true,
      },
    });
    if (users && users.length > 0) {
      return { status: 200, data: users };
    }
    return { status: 404, data: undefined };
  } catch (_) {
    return { status: 404, data: undefined };
  }
};
export const getVideoComments = async (Id: string) => {
  try {
    const comments = await client.comment.findMany({
      where: {
        OR: [{ videoId: Id }, { commentId: Id }],
        commentId: null,
      },
      include: {
        reply: {
          include: {
            User: true,
          },
        },
        User: true,
      },
    });

    return { status: 200, data: comments };
  } catch (_) {
    return { status: 400 };
  }
};

export const createCommentAndReply = async (
  userId: string,
  comment: string,
  videoId: string,
  commentId?: string | undefined
) => {
  try {
    if (commentId) {
      const reply = await client.comment.update({
        where: {
          id: commentId,
        },
        data: {
          reply: {
            create: {
              comment,
              userId,
              videoId,
            },
          },
        },
      });
      if (reply) {
        return { status: 200, data: "Reply posted" };
      }
    }

    const newComment = await client.video.update({
      where: {
        id: videoId,
      },
      data: {
        Comment: {
          create: {
            comment,
            userId,
          },
        },
      },
    });
    if (newComment) return { status: 200, data: "New comment added" };
  } catch (_) {
    return { status: 400 };
  }
};

export const getUserProfile = async () => {
  try {
    const user = await currentUser();
    if (!user) return { status: 404 };
    const profileIdAndImage = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },
      select: {
        image: true,
        id: true,
      },
    });

    if (profileIdAndImage) return { status: 200, data: profileIdAndImage };
  } catch (_) {
    return { status: 400 };
  }
};

export const getPaymentInfo = async () => {
  try {
    const user = await currentUser();
    if (!user) return { status: 404 };

    const payment = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },
      select: {
        subscription: {
          select: { plan: true },
        },
      },
    });
    if (payment) {
      return { status: 200, data: payment };
    }
  } catch (_) {
    return { status: 400 };
  }
};
export const getFirstView = async () => {
  try {
    const user = await currentUser();
    if (!user) return { status: 404 };
    const userData = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },
      select: {
        firstView: true,
      },
    });
    if (userData) {
      return { status: 200, data: userData.firstView };
    }
    return { status: 400, data: false };
  } catch (_) {
    return { status: 400 };
  }
};
export const enableFirstView = async (state: boolean) => {
  try {
    const user = await currentUser();

    if (!user) return { status: 404 };

    const view = await client.user.update({
      where: {
        clerkid: user.id,
      },
      data: {
        firstView: state,
      },
    });

    if (view) {
      return { status: 200, data: "Setting updated" };
    }
  } catch (_) {
    return { status: 400 };
  }
};

export const inviteMember = async (
  recieverId: string,
  workspaceId: string,
  email: string
) => {
  try {
    const user = await currentUser();

    if (!user) return { status: 404 };

    const senderInfo = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
      },
    });

    if (senderInfo?.id) {
      const workspace = await client.workSpace.findUnique({
        where: {
          id: workspaceId,
        },
        select: {
          name: true,
        },
      });

      if (workspace) {
        const invitation = await client.invite.create({
          data: {
            senderId: senderInfo.id,
            recieverId,
            workSpaceId: workspaceId,
            content: `You are invited to join ${workspace.name} workspace, click here to accept the invitation.`,
          },
          select: {
            id: true,
          },
        });

        await client.user.update({
          where: {
            clerkid: user.id,
          },
          data: {
            notification: {
              create: {
                content: `${user.firstName} ${user.lastName} invited ${senderInfo.firstname} into ${workspace.name}`,
              },
            },
          },
        });

        if (invitation) {
          try {
            const { transporter, mailOptions } = await sendEmail(
              email,
              "You got an invitation",
              `You are invited to join ${workspace.name} Workspace. Click the button below to accept the invitation.`,
              `
              <div style="
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
                text-align: center;
                color: #333;
              ">
                <div style="
                  max-width: 500px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  padding: 20px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  margin: auto;
                ">
                  <h2 style="color: #222; margin-bottom: 10px;">You're Invited!</h2>
                  <p style="font-size: 16px; color: #555;">
                    You have been invited to join 
                    <strong style="color: #000;">${workspace.name}</strong> Workspace.
                  </p>
                  <a href="${process.env.NEXT_PUBLIC_HOST_URL}/invite/${invitation.id}" 
                    style="
                      display: inline-block;
                      background-color: #6D28D9;
                      color: #fff;
                      text-decoration: none;
                      font-size: 16px;
                      padding: 12px 24px;
                      border-radius: 8px;
                      font-weight: bold;
                      margin-top: 20px;
                      transition: background 0.3s ease;
                    "
                    onmouseover="this.style.backgroundColor='#5B21B6'"
                    onmouseout="this.style.backgroundColor='#6D28D9'"
                  >
                    Accept Invitation
                  </a>
                  <p style="font-size: 14px; color: #888; margin-top: 15px;">
                    If you didn’t expect this invitation, you can ignore this email.
                  </p>
                </div>
              </div>
              `
            );

            await new Promise((resolve, reject) => {
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error("Email error:", error);
                  reject(error);
                } else {
                  console.log("Email sent successfully:", info.response);
                  resolve(info);
                }
              });
            });

            return { status: 200, data: "Invite sent" };
          } catch (error) {
            console.error("Email sending failed:", error);
            return { status: 400, data: "Failed to send invitation email" };
          }
        }
        return { status: 400, data: "invitation failed" };
      }
      return { status: 404, data: "workspace not found" };
    }
    return { status: 404, data: "recipient not found" };
  } catch (error) {
    console.error("Fatal error in inviteMember:", error);
    return { status: 400, data: "Oops! something went wrong" };
  }
};

export const acceptInvite = async (inviteId: string) => {
  try {
    const user = await currentUser();
    if (!user) return { status: 404 };

    const invite = await client.invite.findUnique({
      where: {
        id: inviteId,
      },
      select: {
        workSpaceId: true,
        reciever: {
          select: {
            clerkid: true,
          },
        },
      },
    });
    if (!invite) return { status: 404, data: "Invite not found" };
    if (user.id !== invite?.reciever?.clerkid) return { status: 401 };

    const acceptInvite = client.invite.update({
      where: {
        id: inviteId,
      },
      data: {
        accepted: true,
      },
    });

    const updateMember = client.user.update({
      where: {
        clerkid: user.id,
      },
      data: {
        members: {
          create: {
            workSpaceId: invite.workSpaceId,
          },
        },
      },
    });

    const memberTransaction = await client.$transaction([
      acceptInvite,
      updateMember,
    ]);

    if (memberTransaction) {
      return { status: 200, data: "Invite accepted" };
    }
    return { status: 400, data: "Invite not accepted" };
  } catch (_) {
    return { status: 400 };
  }
};

export const completeSubscription = async (session_id: string) => {
  try {
    const user = await currentUser();
    if (!user) return { status: 404 };

    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session) {
      const customer = await client.user.update({
        where: {
          clerkid: user.id,
        },
        data: {
          subscription: {
            update: {
              data: {
                customerId: session.customer as string,
                plan: "PRO",
              },
            },
          },
        },
      });
      if (customer) {
        return { status: 200 };
      }
    }
    return { status: 404 };
  } catch (_) {
    return { status: 400 };
  }
};
