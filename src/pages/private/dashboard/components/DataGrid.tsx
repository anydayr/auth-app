import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface CustomizedDataGridProps<T> {
  columns: GridColDef[];
  rows: T[];
  actions: any;
}

const CustomizedDataGrid = <T,>({ columns, rows }: CustomizedDataGridProps<T>) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } }
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: 'outlined',
              size: 'small'
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' }
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' }
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small'
              }
            }
          }
        }
      }}
    />
  );
};

export default CustomizedDataGrid;
