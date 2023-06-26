import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Customer = ({ customer }) => {
  return (
    <div>
      <TableRow>
        <TableCell>{customer.id}</TableCell>
        <TableCell><img src={customer.image} alt="Profile Image" /></TableCell>
        <TableCell>{customer.name}</TableCell>
        <TableCell>{customer.birthday}</TableCell>
        <TableCell>{customer.gender}</TableCell>
        <TableCell>{customer.job}</TableCell>
      </TableRow>
    </div>
  );
};

export default Customer;
