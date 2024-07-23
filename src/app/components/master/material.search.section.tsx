'use client'
import { MaterialMasterSearchResult } from "@/app/types";
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import TableMaterial from '../table/master/material';
import { useRouter } from 'next/navigation';
import { ButtonSearch, ButtonAdd } from "../button/button";
import { Search } from "@/app/master/material/material.action.fn";
interface MaterialProps {
}

const SearchSection: React.FC<MaterialProps> = () => {
    const [resultDatas, setResultDatas] = useState<MaterialMasterSearchResult[]>();
    async function handleSearch(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        event.preventDefault();
        setResultDatas(await Search());
    }

    const router = useRouter();
    function handleAdd(event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        path: string) {
        event.preventDefault();
        router.push(path);

    }
    return (
        <Grid container spacing={5}>
            <Grid xs={12} md={12}>
                <Box component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off" >
                    <TextField id="outlined-basic" label="Material Code" color="info" name='materialCode' focused />
                    <TextField id="outlined-basic" label=" Material Name" color="info" name='materialName' focused />
                </Box >
            </Grid>
            <Grid xs={12} md={12}>
                <Stack direction="row" spacing={2}>
                    <ButtonSearch
                        label={'Search Material'}
                        isLoading={true}
                        onClick={(e) => handleSearch(e)}

                    />
                    <Button variant="contained" onClick={() => alert("cancel")} startIcon={<ClearIcon />}>
                        Cancel
                    </Button>
                </Stack>
            </Grid>
            <Grid xs={12} md={12}>
                <Stack direction="row" spacing={2} justifyContent="right">
                    <ButtonAdd
                        label={'Add Material'}
                        isLoading={true}
                        disabled={false}
                        onClick={(e) => handleAdd(e, 'material/add')}

                    />
                </Stack>
            </Grid>
            <Grid xs={12} md={12}>
                <TableMaterial resultsdata={resultDatas} />
            </Grid>
        </Grid>
    )
};
export default SearchSection;
