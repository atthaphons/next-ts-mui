import { profile } from "@/app/data/user.login";
import { IUserProfile } from "@/interface/common";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<any> {
  const { userId, companyCode }: IUserProfile = await request.json();
  const result = profile.filter(
    (p) => p.userId === userId && p.companyCode === companyCode
  );

  return NextResponse.json(result);
}
