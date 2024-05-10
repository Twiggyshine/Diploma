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



// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';

// interface CustomButtonProps {
//   buttonColor: string;
//   children: React.ReactNode; // Добавляем свойство children в интерфейс пропсов
// }

// const CustomStyledButton = styled(Button)<{ buttonColor: string }>(
//   ({ theme, buttonColor }) => ({
//     color: buttonColor,
//     borderColor: buttonColor,
//   })
// );

// const CustomButton: React.FC<CustomButtonProps> = ({ children, buttonColor }) => {
//   return (
//     <CustomStyledButton buttonColor={buttonColor} variant="outlined"style={{width: '250px', height: '50px'}}>
//       {children}
//     </CustomStyledButton>
//   );
// };

// export default CustomButton;