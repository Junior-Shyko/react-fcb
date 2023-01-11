import { Link } from "react-router-dom";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
// @mui material components
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Badge from '@mui/material/Badge';

export default function columnsusers() {
    const clicou = (value) => {
        console.log({value})
    }
    return {
        columns: [
            { Header: "Nome", accessor: "nameUser", width: "30%", align: "left" },
            { 
                Header: "Vinculo", accessor: "nameLink", align: "center",
                Cell: ({ value }) => (
                    <MDBox display="flex">
                        {/* <Badge  badgeContent={value} container   color="secundary"/> */}
                        { 
                        value === "Líder em Treinamento" && (
                            <MDTypography fontWeight="light" variant="overline" sx={{color: '#56a155', border: "1px solid", borderRadius: '20px', p: 0.5}}>
                               {value}
                            </MDTypography>
                        )}
                        { 
                        value === "Lider" && (
                            <Badge  badgeContent={value} container color="success" />
                        )}
                        { 
                        value === "Membro" && (
                            <Badge  badgeContent={value} container color="info" />
                        )}
                    </MDBox>
                )
        
            },
            { Header: "Grupo", accessor: "nameGroup", align: "center" },
            { Header: "Detalhes", accessor: "idUser", id: 'edit', align: "center",
                // Cell: ({id}) => (<button onClick={()=>{console.log('clicked value', id)}}>Edit -{id}-</button>)
                Cell: ({ value }) => (
                    <MDBox>
                        {/* <MDProgress value={100} color="success" variant="gradient" label={false} />
                        */}
                        <MDButton variant="gradient" color="info" size="medium" circular={true} iconOnly title="Editar Usuário">
                          <Link to={`../usuario/editar/` + value} relative="path" >
                            <MDTypography color="white" >
                                <ManageAccountsIcon />
                            </MDTypography>
                          </Link>
                        </MDButton>
                    </MDBox>
                )
            },
        ],
    }
}