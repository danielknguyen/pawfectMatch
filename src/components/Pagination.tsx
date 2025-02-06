import { Box, Pagination as MuiPagination } from "@mui/material";

const paginationStyles = {
  mt: 2,
  mb: 2,
  m: 3,
};

interface PaginationProps {
  total: number;
  size?: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export const Pagination = ({ total, size = 25, onChange }: PaginationProps) => {
  return total > 0 ? (
    <Box display="flex" justifyContent="center">
      <MuiPagination
        count={Math.ceil(total / size)}
        onChange={onChange}
        sx={paginationStyles}
        color="primary"
      />
    </Box>
  ) : (
    <></>
  );
};
