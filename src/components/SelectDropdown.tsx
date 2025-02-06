import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const BoxStyle = {
  minWidth: 120,
};

interface SelectDropdownProps {
  label: string;
  value: string | string[];
  onChange: (value: any) => void;
  options: string[];
}

export const SelectDropdown = ({
  label,
  value,
  onChange,
  options,
}: SelectDropdownProps) => {
  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={BoxStyle}>
      <FormControl fullWidth>
        <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
        <Select
          labelId={`${label}-select-label`}
          id={`${label}-select`}
          value={Array.isArray(value) ? value[0] ?? "" : value ?? ""}
          label={label}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
