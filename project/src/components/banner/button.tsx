import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';

export default function CustomButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" href="#outlined-buttons" size='large' style={{borderColor: 'white', color: 'white', width: '250px', height: '70px'}}>
        Shop Now
      </Button>
    </Stack>
  );
}



