import { Component, MouseEvent } from 'react'

import { fetcherAdd } from '@/app/lib/fetcher';
import { MaterialDetailsForm } from '@/app/types';



export class ActionMaster extends Component {

    static async Add(path: string, object: object): Promise<string> {
        console.log("Add " + path, object)
        const res = await fetcherAdd(path, object);
        console.log("### res data####" + JSON.stringify(res.data))
        console.log("### res status####" + JSON.stringify(res.status))
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
    static async Search(path: string, object: object): Promise<string> {
        console.log("Search ", path, object)
        return "search success"
    }
}

export default ActionMaster