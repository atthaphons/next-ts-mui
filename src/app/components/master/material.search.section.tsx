'use client'
import { fetcher } from '@/app/lib/fetcher';
import { MaterialMasterSearchResult } from "@/app/types";
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import TableMaterial from '../table/master/material';
import { useRouter } from 'next/navigation';
interface MaterialProps {
}



const SearchSection: React.FC<MaterialProps> = () => {
    const [resultDatas, setResultDatas] = useState<MaterialMasterSearchResult[]>();
    const searchDataResult = async () => {
        const res = await fetcher(`https://668f4c3a80b313ba091794a6.mockapi.io/material`);
        if (!res) {
            throw new Error('Failed to fetch data');
        }
        return (res?.data)
    };
    console.log("+++ TEST resultDatas ++", resultDatas)
    async function handleSearch(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        console.log(event)
        setResultDatas(await searchDataResult());
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
                    <Button variant="contained" startIcon={<SearchIcon />}
                        onClick={(e) => handleSearch(e)}>
                        Search
                    </Button>
                    <Button variant="contained" startIcon={<ClearIcon />}>
                        Cancel
                    </Button>
                </Stack>


            </Grid>
            <Grid xs={12} md={12}>
                <Stack direction="row" spacing={2} justifyContent="right">
                    <Button variant="contained" startIcon={<AddIcon />}
                        onClick={(e) => handleAdd(e, 'material/add')}>
                        Add
                    </Button>

                </Stack>

            </Grid>
            <Grid xs={12} md={12}>
                <TableMaterial resultsdata={resultDatas} />
            </Grid>
        </Grid>
    )

};
export default SearchSection;
