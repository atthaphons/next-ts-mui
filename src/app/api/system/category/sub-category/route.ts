import { MasterData } from "@/app/data/system"
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();
        const filteredProducts = MasterData.filter((data) => data.CATEGORY == body.CATEGORY && data.SUB_CATEGORY == body.SUB_CATEGORY);
        return NextResponse.json(filteredProducts);
    } catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}