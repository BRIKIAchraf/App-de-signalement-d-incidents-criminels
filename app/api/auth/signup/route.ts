import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, password, name, role } = await request.json();
    if (!email || !password || !name) {
      return NextResponse.json(
        {
          error: "missing required fileds",
        },
        {
          status: 400,
        }
      );
    }
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          error: "user already exists",
        },
        {
          status: 400,
        }
      );
    }
    const hasedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hasedPassword,
        role: role as "ADMIN" | "MODERATOR" | "USER",
      },
    });

    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error) {
    console.error("singup error: ", error);
    return NextResponse.json(
      { error: "error cretating user" },
      { status: 500 }
    );
  }
}
