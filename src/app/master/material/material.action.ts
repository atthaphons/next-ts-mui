import { Component } from 'react'
import { create, fetcher } from '@/app/lib/fetcher';
import { MaterialMasterSearchResult } from '@/app/types';

export class ActionMaster extends Component {
    static async Add(path: string, object: object): Promise<string> {
        await create(path, object);
        return "add success"
    }
    static async Edit(path: string, object: object): Promise<string> {
        console.log("Edit " + path, object)
        return "edit success"
    }
    static async Delete(path: string, id: string): Promise<string> {
        console.log("Delete ", path, id)
        return "delete success"
    }
    static async Search(): Promise<MaterialMasterSearchResult[]> {
        const res = await fetcher(`https://668f4c3a80b313ba091794a6.mockapi.io/material`);
        if (!res) {
            throw new Error('Failed to fetch data');
        }
        return (res?.data)
    }
}

export default ActionMaster