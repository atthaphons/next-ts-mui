import { Button } from '@mui/material';
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { MaterialMasterSearchResult } from '@/app/types';
import ActionMaster from '@/app/master/material/material.action';




const SearchButton = ({ paramCriteria }) => {



    return (
        <Button variant="contained" startIcon={<SearchIcon />}
            onClick={(e) => handleSearch(e)}
            creterial={paramCriteria}
        >

            Search Component
        </Button>


    )
}
export default SearchButton;
