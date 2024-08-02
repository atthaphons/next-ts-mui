import { MasterData } from "@/app/data/system"
import { IDropDown } from "@/interface/common";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();
        console.log(body)
        const filteredProducts = MasterData.filter(data => data.category === body.category && data.subCategory === body.subCategory)
            .map(item => ({ value: item.cd, label: item.value }))

        const defaultDropdown: IDropDown = {
            value: '',
            label: 'SELECT'
        };
        filteredProducts.push(defaultDropdown)
        return NextResponse.json(filteredProducts);
    } catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}