import { Autocomplete, Chip, TextField } from '@mui/material';
import React, { useState } from 'react'

const TestCustomMultipleInput = () => {
    const [ multipleValues, setMultipleValues] = useState([])

    const handleChange = (values) => {
      console.log(values)
    }
    return (
      <Autocomplete
        freeSolo
        multiple
        options={[]}
        // value={value}
        onChange={(event, values) => handleChange(values)}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={`TLDS_CHIP_${option}_${index}`}
              color="primary"
              variant="outlined"
              value={value}
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            helperText="e.g .btc"
            {...params}
            label="tlds"
            size="small"
            variant="outlined"
          />
        )}
      />
    );
}

export default TestCustomMultipleInput
