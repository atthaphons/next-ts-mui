import { create, fetcher } from '@/app/lib/fetcher'
export const Add = async (object: object) => {
    await create(`https://668f4c3a80b313ba091794a6.mockapi.io/material`, object);
    return "Add success"
}

export const Edit = async (path: string, object: object) => {
    console.log("Edit " + path, object)
    return "edit success"
}

export const Delete = async (path: string, id: string) => {
    console.log("Delete " + path, id)
    return "edit success"
}

export const Search = async () => {
    const res = await fetcher(`https://668f4c3a80b313ba091794a6.mockapi.io/material`);
    if (!res) {
        throw new Error('Failed to fetch data');
    }
    return (res?.data)
}
