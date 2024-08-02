"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { deleteMember, fetchMembers, userSelector } from "@/app/store/slices/member.slice";
import { usePathname, useRouter } from "next/navigation";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useAppDispatch } from "@/app/store/store";
import { IUserManage } from "@/interface/common";

export default function ResultTable() {
    const dispatch = useAppDispatch();
    const usersReducer = useSelector(userSelector);
    const router = useRouter();
    const pathname = usePathname()
    useEffect(() => {
        dispatch(fetchMembers());
    }, [dispatch]);

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow >
                            <TableCell sx={{ mb: 4, fontWeight: 'bold' }} align="center">Name</TableCell>
                            <TableCell sx={{ mb: 4, fontWeight: 'bold' }} align="center">Email</TableCell>
                            <TableCell sx={{ mb: 4, fontWeight: 'bold' }} align="center">Phone</TableCell>
                            <TableCell sx={{ mb: 4, fontWeight: 'bold' }} align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usersReducer.users.map((user: IUserManage) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phoneNumber}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        color="error"
                                        sx={{ mr: 2 }}
                                        onClick={() => dispatch(deleteMember(user.id))}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ mr: 2 }}
                                        onClick={() => router.push(`${pathname}/edit/${user.id}`)}
                                    >
                                        Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

