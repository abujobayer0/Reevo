"use server";
import { client } from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
  console.log("Endpoint hit ✅");
  const { id } = context.params;

  try {
    const userProfile = await client.user.findUnique({
      where: {
        clerkid: id,
      },
      include: {
        studio: true,
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    if (userProfile) {
      return NextResponse.json(
        { status: "success", user: userProfile },
        { status: 200 }
      );
    }

    const clerkClientInstance = await clerkClient();
    const clerkUserInstance = await clerkClientInstance.users.getUser(id);

    const createUser = await client.user.create({
      data: {
        clerkid: id,
        email: clerkUserInstance.emailAddresses[0].emailAddress,
        firstname: clerkUserInstance.firstName,
        lastname: clerkUserInstance.lastName,
        studio: {
          create: {},
        },
        workspace: {
          create: {
            name: `${clerkUserInstance.firstName}'s Workspace`,
            type: "PERSONAL",
          },
        },
        subscription: {
          create: {},
        },
      },
      include: {
        studio: true,
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    if (createUser) {
      return NextResponse.json(
        { status: "success", user: createUser },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { status: "error", message: "Failed to create user" },
      { status: 400 }
    );
  } catch (error) {
    console.log("ERROR", error);
    return NextResponse.json(
      { status: "error", error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
