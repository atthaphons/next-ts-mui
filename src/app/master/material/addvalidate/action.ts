import React from 'react'
import ActionMaster from '../material.action';
export const ActionMaterial = () => {

}





export async function handleSave(userData: object) {
    const saveAdd = await ActionMaster.Add(`https://668f4c3a80b313ba091794a6.mockapi.io/material`, userData);
    alert("Save Success id = " + JSON.stringify(saveAdd));
}


