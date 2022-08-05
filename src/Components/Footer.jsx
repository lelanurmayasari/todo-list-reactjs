import { Box, Button, Checkbox, Typography } from '@material-ui/core'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: 'center',
          p: 1,
          m: 1,
        }}
      >
        <Checkbox />
        <Typography gutterBottom component="list-item">You have 0 to do</Typography>
        <Button variant="contained" color="primary">
          Delete All
        </Button>
      </Box>
    </div>
  );
}

export default Footer