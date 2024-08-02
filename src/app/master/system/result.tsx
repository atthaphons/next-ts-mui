"use client";
import { fetchSystems, systemSelector } from '@/app/store/slices/system.slice';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import {
    DataGrid, GridActionsCellItem, GridColDef,
    GridEventListener, GridRowEditStopReasons, GridRowId,
    GridRowModel, GridRowModes, GridRowModesModel, GridSlots,
    GridToolbarContainer
} from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { randomId } from '@mui/x-data-grid-generator';
import { useAppDispatch } from '@/app/store/store';
import { ISystemManage } from '@/interface/common';


type Props = {}

function EditToolbar(props: EditToolbarProps) {
    const { setRows, setRowModesModel } = props;
    const handleClick = () => {
        const id = randomId();
        setRows((oldRows: any) => [...oldRows, { id, category: '', subCategory: '', isNew: true }]);
        setRowModesModel((oldModel: any) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'category' },
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
const Result = (props: Props) => {
    const dispatch = useAppDispatch();
    const systemReducer = useSelector(systemSelector);
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
    const [rows, setRows] = useState<ISystemManage[]>(systemReducer.systems);
    useEffect(() => {
        dispatch(fetchSystems());
    }, [dispatch]);

    console.log("rows ==>", rows)
    useEffect(() => {
        setRows(systemReducer.systems);
    }, [systemReducer]);


    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };
    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };
    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params: { reason: any; }, event: { defaultMuiPrevented: boolean; }) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const processRowUpdate = (newRow: GridRowModel) => {
        console.log("newRow : ", newRow)
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row: { id: any; }) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleSaveClick = (id: GridRowId) => () => {
        console.log("SAVE ID : ", id)
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleCancelClick = (id: GridRowId) => () => {
        console.log("CANCEL ID : ", id)
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row: { id: GridRowId; }) => row.id === id);
        if (editedRow!.isNew) {
            setRows(rows.filter((row: { id: GridRowId; }) => row.id !== id));
        }
    };
    const handleDeleteClick = (id: GridRowId) => () => {
        console.log("DELETE ID : ", id)
        setRows(rows.filter((row: { id: GridRowId; }) => row.id !== id));
    };


    const columns: GridColDef[] = [
        {
            field: 'category',
            headerName: 'Category',
            width: 280,
            align: 'left',
            headerAlign: 'left',
            editable: true,
        },
        {
            field: 'subCategory',
            headerName: 'Sub Category',
            width: 380,
            editable: true,
        },
        {
            field: 'cd',
            headerName: 'CD',
            width: 80,
            editable: true,
        },
        {
            field: 'value',
            headerName: 'Value',
            width: 280,
            editable: true,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {

                // console.log("getActions => ", id)
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            key={id}
                            icon={<SaveIcon />}
                            label="Save"
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
                        key={id}
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        key={id}
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];
    return (
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
    )
}

export default Result