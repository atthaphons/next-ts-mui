import { products } from "@/app/data/products";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();
        const filteredProducts = products.filter((product) => product.name == body.productName);
        return NextResponse.json(filteredProducts);
    } catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}