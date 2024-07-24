const productNames = [
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
    'Product 5',
    // Add more product names as needed
];


export async function GET() {
    return Response.json(productNames
    )
}
