import { products } from "@/app/data/products";

export async function GET(request: any, { params }: { params: { slug: string } }) {
    console.log("test => ", params)

    const filteredProducts = products.filter((product) =>
        products.name.toLowerCase().includes((slug as string).toLowerCase()) &&
        (productName ? product.name === productName : true)
    );
    return Response.json(filteredProducts
    )
}
