'use client';

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    isLoading?: boolean;
}

export const ButtonSearch: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    isLoading,
}) => {
    return (
        <>{
            isLoading &&
            <Button variant="contained" startIcon={<SearchIcon />}
                disabled={disabled}
                onClick={onClick}>
                {label}
            </Button>
        }
        </>
    )

};
export const ButtonAdd: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    isLoading,
}) => {
    return (
        <>{
            isLoading &&
            <Button variant="contained" startIcon={<AddIcon />}
                disabled={disabled}
                onClick={onClick}>
                {label}
            </Button>
        }
        </>
    )
};
