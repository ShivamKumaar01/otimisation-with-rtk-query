// import * as React from 'react';
// import { styled } from '@mui/system';
// import Box from '@mui/material/Box';
// import { TablePagination, tablePaginationClasses as classes} from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { cardList } from '../redux/slice';
// import { ThunkDispatch } from "@reduxjs/toolkit";
import { useGetAllProductsQuery } from '../redux/product-api';


// const Table = () => {
//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(5);
//     const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
//     const{value}=useGetAllProductsQuery()
//     console.log(value,"this is data coming from api")

//      React.useEffect(() => {
//         dispatch(cardList());
//       }, []);

//    const dataobj = useSelector((store) => store.apiCall);
//    console.log(dataobj,"this is dataobj");
//    const data=dataobj.data;
//    console.log(data,"isko table me dikha do")
//     // Avoid a layout jump when reaching the last page with empty rows.
//     const emptyRows =
//       page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
//     const handleChangePage = (
//       event: React.MouseEvent<HTMLButtonElement> | null,
//       newPage: number,
//     ) => {
//       setPage(newPage);
//     };
  
//     const handleChangeRowsPerPage = (
//       event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     ) => {
//       setRowsPerPage(parseInt(event.target.value, 10));
//       setPage(0);
//     };


//     // function createData(Title: string, Description: string, Category: string) {
//     //     return { Title, Description, Category };
//     // }
    
      
//     const rows = [
     
//         // createData('Cupcake', 305, 3.7),
//         // createData('Donut', 452, 25.0),
//         // createData('Eclair', 262, 16.0),
//         // createData('Frozen yoghurt', 159, 6.0),
//         // createData('Gingerbread', 356, 16.0),
//         // createData('Honeycomb', 408, 3.2),
//         // createData('Ice cream sandwich', 237, 9.0),
//         // createData('Jelly Bean', 375, 0.0),
//         // createData('KitKat', 518, 26.0),
//         // createData('Lollipop', 392, 0.2),
//         // createData('Marshmallow', 318, 0),
//         // createData('Nougat', 360, 19.0),
//         // createData('Oreo', 437, 18.0),
//       ]
//       // .sort((a, b) => (a.calories < b.calories ? -1 : 1));
//     // const rows=data;

//     console.log(data,"this is data")




//   return (
//     <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
//      <h1>Products</h1>

//      <Root sx={{ maxWidth: '100%', width: 500 }}>
//       <table aria-label="custom pagination table">
//         <thead>
//           <tr>
//            <th>id</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Category</th>
//           </tr>
//         </thead>
//         <tbody>
//           {(rowsPerPage > 0
//             ? data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : data
//           )?.map((row) => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>{row.title}</td>
//               <td style={{ width: 160 }} align="right">
//                 {row.description}
//               </td>
//               <td style={{ width: 160 }} align="right">
//                 {row.category
//                 }
//               </td>
//             </tr>
//           ))}
//           {emptyRows > 0 && (
//             <tr style={{ height: 41 * emptyRows }}>
//               <td colSpan={3} aria-hidden />
//             </tr>
//           )}
//         </tbody>
//         <tfoot>
//           <tr>
//             <CustomTablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={3}
//               count={data?.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               slotProps={{
//                 select: {
//                   'aria-label': 'rows per page',
//                 },
//                 actions: {
//                   showFirstButton: true,
//                   showLastButton: true,
//                 },
//               }}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//           </tr>
//         </tfoot>
//       </table>
//     </Root>
//     </Box>
//   )
// }


  

 
  
//   const grey = {
//     50: '#F3F6F9',
//     100: '#E5EAF2',
//     200: '#DAE2ED',
//     300: '#C7D0DD',
//     400: '#B0B8C4',
//     500: '#9DA8B7',
//     600: '#6B7A90',
//     700: '#434D5B',
//     800: '#303740',
//     900: '#1C2025',
//   };
  
//   const Root = styled('div')(
//     ({ theme }) => `
//     table {
//       font-family: 'IBM Plex Sans', sans-serif;
//       font-size: 0.875rem;
//       border-collapse: collapse;
//       width: 100%;
//     }
  
//     td,
//     th {
//       border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
//       text-align: left;
//       padding: 8px;
//     }
  
//     th {
//       background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//     }
//     `,
//   );
  
//   const CustomTablePagination = styled(TablePagination)`
//     & .${classes.toolbar} {
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//       gap: 10px;
  
//       @media (min-width: 768px) {
//         flex-direction: row;
//         align-items: center;
//       }
//     }
  
//     & .${classes.selectLabel} {
//       margin: 0;
//     }
  
//     & .${classes.displayedRows} {
//       margin: 0;
  
//       @media (min-width: 768px) {
//         margin-left: auto;
//       }
//     }
  
//     & .${classes.spacer} {
//       display: none;
//     }
  
//     & .${classes.actions} {
//       display: flex;
//       gap: 0.25rem;
//     }
//   `;

// export default Table
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';

import React from 'react'

const Table = () => {
  const{data}=useGetAllProductsQuery()
  console.log(data,"This is data comming from api");
  return (
    <div>
      
    </div>
  )
}

export default Table
