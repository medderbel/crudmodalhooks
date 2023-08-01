import React,{useMemo} from 'react'
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
const ArticleList = ({articles}) => {
const columns = useMemo(
() => [
{
accessorKey: 'imageart', //access nested data with dot notation
header: 'Image',
Cell: ({ cell}) => (
<Box
sx={{
display: 'flex',
alignItems: 'center',
gap: '1rem',
}}
>
<img
alt=""
height={100}
src={cell.getValue()}
loading="lazy"
style={{ borderRadius: '20%' }}
/>

</Box>),
},
{
accessorKey: 'reference', //access nested data with dot notation
header: 'Référence',
size: 100,
},
{
accessorKey: 'designation',
header: 'Désignation',
size: 100,
},
{
accessorKey: 'marque', //normal accessorKey
header: 'Marque',
size: 100,
},
{
accessorKey: 'prix',
header: 'Prix',
size: 100,
},
{
accessorKey: 'qtestock',
header: 'Stock',
size: 100,
},
],
[],
);
return (
<div>
<MaterialReactTable columns={columns} data={articles} />;
</div>
)
}
export default ArticleList