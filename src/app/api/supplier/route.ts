import { suplierData } from "@/app/data/suppllier";
import { SearchCriteria } from "@/interface/supplier";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<any> {
  const { supplierCode, supplierName }: SearchCriteria = await request.json();
  const result = suplierData
    .filter((data) =>
      data.supplierCode
        .toLocaleLowerCase()
        .includes(supplierCode.toLocaleLowerCase())
    )
    .filter((data) =>
      data.supplierName
        .toLocaleLowerCase()
        .includes(supplierName.toLocaleLowerCase())
    );
  return NextResponse.json(result);
}
