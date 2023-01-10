import { TableCell, TableRow } from "@mui/material";
import { FC, useMemo } from "react";
import { DataInfo } from "./DataTable";
import style from '../../styles/Table.module.css';
import { formatDomain } from "../../utils/format";

export const CustomTableRow: FC<DataInfo> = ({ club, domain }) => {
  const baseURI = process.env.NEXT_PUBLIC_APP_URL;

  const uri = useMemo(() => {
    const cleanedDomain = formatDomain(domain);
    if(!baseURI) return;
    return `${baseURI}/${cleanedDomain}`;
  }, [domain, baseURI])
  
  return (
    <TableRow
      key={domain}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <a href={uri} target="_blank" rel="noreferrer">
        <TableCell align="center" component="th" scope="row" className={style.tableCellLabel}>
          {domain}
        </TableCell>
      </a>
      <TableCell align="center" className={style.tableCellLabel}>{club}</TableCell>
    </TableRow>
  )
}