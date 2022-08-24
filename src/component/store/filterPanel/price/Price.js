import React from 'react'
import { Box, Slider } from "@mui/material"

const Price = ({filter, changeHandler}) => {
  return (
    <div>
        <Box className="mt-6 mb-10">
          <Slider
            name="price"
            value={filter.price}
            onChange={changeHandler}
            valueLabelDisplay="auto"
            step={50}
            min={0}
            max={300}
          />
        </Box>
    </div>
  )
}

export default Price