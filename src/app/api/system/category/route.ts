import { MasterData } from "@/app/data/system"
import { IDropDown } from "@/interface/common";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();

        // Filter, map to subCategory, and get distinct values
        const filteredProducts = Array.from(new Set(
            MasterData
                .filter(data => data.category === body.category)
                .map(item => item.subCategory)
        ));

        // Map to new object format
        const subCategoryObjects = filteredProducts.map(subCategory => ({
            value: subCategory,
            label: subCategory
        }));


        const defaultDropdown: IDropDown = {
            value: '',
            label: 'SELECT'
        };
        filteredProducts.push(defaultDropdown)

        return NextResponse.json(subCategoryObjects);
    } catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}