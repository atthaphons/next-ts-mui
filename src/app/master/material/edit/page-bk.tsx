'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
    GridRowModesModel,
    GridRowModes,
    DataGrid,
    GridColDef,
    GridToolbarContainer,
    GridActionsCellItem,
    GridEventListener,
    GridRowId,
    GridRowModel,
    GridRowEditStopReasons,
    GridSlots,
} from '@mui/x-data-grid';
import {
    randomCreatedDate,
    randomTraderName,
    randomId,
    randomArrayItem,
} from '@mui/x-data-grid-generator';
import { fetcher } from '@/app/lib/fetcher';
import { useEffect } from 'react';
import { MaterialMasterSearchResult } from '@/app/types';

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
    return randomArrayItem(roles);
};


const searchDataResult = async () => {


    console.log("searchDataResult")
    const res = await fetcher(`https://668f4c3a80b313ba091794a6.mockapi.io/material`);
    if (!res) {
        throw new Error('Failed to fetch data');
    }
    return (res?.data)
};




interface EditToolbarProps {
    setRows: (newRows: (oldRows: MaterialMasterSearchResult) => MaterialMasterSearchResult) => void;
    setRowModesModel: (
        newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
    ) => void;
}

function EditToolbar(props: EditToolbarProps) {
    const { setRows, setRowModesModel } = props;



    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [...oldRows, { id, matCd: '', matName: '', cmpyCd: '', isNew: true }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                Add record
            </Button>
        </GridToolbarContainer>
    );
}

export default function FullFeaturedCrudGrid() {
    console.log("aaaasss")


    const [rows, setRows] = React.useState<MaterialMasterSearchResult>([]);
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});



    useEffect(() => {

        console.log("useEffect")
        async function fetchMyAPI() {

            const res = await fetcher(`https://668f4c3a80b313ba091794a6.mockapi.io/material`);
            if (!res) {
                throw new Error('Failed to fetch data');
            }
            console.log("A", JSON.stringify(res?.data))
            setRows(res?.data);

            console.log("A", JSON.stringify(rows))
        }
        // Do something here...
        // searchDataResult
        fetchMyAPI();
        console.log("B", JSON.stringify(rows))

    }, []);


    console.log("BBBB")
    console.log(JSON.stringify(rows))

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id: GridRowId) => () => {
        //call API Delete
        setRows(rows.filter((row: { id: GridRowId; }) => row.id !== id));
    };

    const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow!.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow: GridRowModel) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };


    const columns: GridColDef[] = [
        {
            field: "id",
            headerName: "MATERIAL ID",

        },
        {
            field: "matCd",
            headerName: "MATERIAL CODE",
            editable: true,

        },
        {
            field: "matName",
            headerName: "MATERIAL NAME",
            editable: true,

        },
        {
            field: "cmpyCd",
            headerName: "COMPABY",
            editable: true,

        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            key={id}
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            key={id}
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        key={id}
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        key={id}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    // const columns: GridColDef[] = [
    //     { field: 'name', headerName: 'Name', width: 180, editable: true },
    //     {
    //         field: 'matCd',
    //         headerName: 'Age',
    //         type: 'number',
    //         width: 80,
    //         align: 'left',
    //         headerAlign: 'left',
    //         editable: true,
    //     },
    //     {
    //         field: 'matName',
    //         headerName: 'Join date',
    //         type: 'date',
    //         width: 180,
    //         editable: true,
    //     },
    //     {
    //         field: 'role',
    //         headerName: 'Department',
    //         width: 220,
    //         editable: true,
    //         type: 'singleSelect',
    //         valueOptions: ['Market', 'Finance', 'Development'],
    //     },
    //     {
    //         field: 'actions',
    //         type: 'actions',
    //         headerName: 'Actions',
    //         width: 100,
    //         cellClassName: 'actions',
    //         getActions: ({ id }) => {
    //             const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

    //             if (isInEditMode) {
    //                 return [
    //                     <GridActionsCellItem
    //                         icon={<SaveIcon />}
    //                         label="Save"
    //                         key={id}
    //                         sx={{
    //                             color: 'primary.main',
    //                         }}
    //                         onClick={handleSaveClick(id)}
    //                     />,
    //                     <GridActionsCellItem
    //                         icon={<CancelIcon />}
    //                         label="Cancel"
    //                         key={id}
    //                         className="textPrimary"
    //                         onClick={handleCancelClick(id)}
    //                         color="inherit"
    //                     />,
    //                 ];
    //             }

    //             return [
    //                 <GridActionsCellItem
    //                     icon={<EditIcon />}
    //                     label="Edit"
    //                     key={id}
    //                     className="textPrimary"
    //                     onClick={handleEditClick(id)}
    //                     color="inherit"
    //                 />,
    //                 <GridActionsCellItem
    //                     icon={<DeleteIcon />}
    //                     label="Delete"
    //                     key={id}
    //                     onClick={handleDeleteClick(id)}
    //                     color="inherit"
    //                 />,
    //             ];
    //         },
    //     },
    // ];

    return (
        <Box
            sx={{
                height: 500,
                width: '100%',
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slots={{
                    toolbar: EditToolbar as GridSlots['toolbar'],
                }}
                slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
            />
        </Box>
    );
}
