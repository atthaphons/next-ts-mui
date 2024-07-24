import { MasterData } from "@/app/data/system"
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        return NextResponse.json(MasterData);
    } catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}