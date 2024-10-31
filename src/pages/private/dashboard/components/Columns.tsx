import React, { useCallback, useState } from 'react';
import { Menu, MenuItem, IconButton, useTheme } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GridCellParams, GridColDef } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateModalType } from '../../../../redux/modal-slice';
import { useDispatch } from 'react-redux';
import { updateTable } from '../../../../redux/table-slice';

export const columnUser: GridColDef[] = [
  { field: 'id', headerName: 'Nro. Registro', flex: 0.5, minWidth: 50 },
  { field: 'title', headerName: 'Título', flex: 1.5, minWidth: 200 },
  {
    field: 'description',
    headerName: 'Descripción',
    flex: 1,
    minWidth: 80
  }
];

export const columnsAdmin: GridColDef[] = [
  { field: 'id', headerName: 'Nro. Registro', flex: 0.5, minWidth: 50 },
  { field: 'title', headerName: 'Título', flex: 1.5, minWidth: 200 },
  {
    field: 'description',
    headerName: 'Descripción',
    flex: 1,
    minWidth: 80
  },
  {
    field: 'actions',
    headerName: 'Acción',
    flex: 1,
    minWidth: 80,
    renderCell: (params) => renderActions(params)
  }
];

export function renderActions(params: GridCellParams<{ name: string; color: string }, any, any>) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (id: number) => {
    dispatch(updateTable({ rowSelected: id }));
    dispatch(updateModalType({ content: 'edit-placeholders' }));
    console.log('Editando elemento:', params.row);
    handleClose();
  };

  const handleDelete = (id: number) => {
    dispatch(updateTable({ rowSelected: id }));
    dispatch(updateModalType({ content: 'delete-placeholders' }));
    handleClose();
  };

  if (params.value == null) {
    return '';
  }

  const rowId = params.row.id;

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          onClick={() => handleEdit(rowId)} // Usar el id de la fila
          sx={{ display: 'flex', gap: '0.5rem', color: theme.palette.secondary.main }}>
          <EditIcon />
          Editar
        </MenuItem>
        <MenuItem
          onClick={() => handleDelete(rowId)} // Usar el id de la fila
          sx={{ display: 'flex', gap: '0.5rem', color: theme.palette.secondary.main }}>
          <DeleteIcon />
          Eliminar
        </MenuItem>
      </Menu>
    </>
  );
}
