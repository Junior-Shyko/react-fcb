import React, { useEffect, useState } from "react";
import {api} from '../../../services/Api';
import DataTable from 'components/FCB/Groups/DataTable';

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';


import MDBox from "components/MDBox";
import MDTypography from "../../MDTypography";

function List(props) {
    const [tableData, setTableData] = useState([])
    
    if(props.situacionList) {
        setTimeout(() => {
            props.upList(false)
            getGroups();
        }, 1000);
    }

    const getGroups = async () => {
        api.get("group")
        .then( (res) => {            
            setTableData(res.data)
        })
        .catch( (err) => {
            console.log({err})
        })
    }
    
    useEffect(() => {
        getGroups();
    }, [])
      
    return (
        <Grid container spacing={3} mt={0}>
            <Grid item xs={12}>
                <Card>
                <CardContent>
                    <MDTypography variant="h6" gutterBottom>
                    Lista dos grupos
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" lineHeight={0}>                      
                    <MDTypography variant="button" fontWeight="light" color="text">
                        Lista do nome de todos os grupos de convívio.
                    </MDTypography>                   
                    </MDBox>
                    <MDBox>
                    <Grid item xs={12}>
                        <DataTable listUp={props.situacionList} tables={tableData}/>
                    </Grid>
                    </MDBox>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default List;