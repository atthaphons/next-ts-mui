import { Typography } from '@mui/material'
import React from 'react'

export default function HeaderMaster({ textMenu }: any) {



    return (
        <Typography variant="h6" noWrap component="div">
            {textMenu}
        </Typography>
    )
}
