import React, { useEffect, useState } from "react";
import {api} from '../../../services/Api';

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';

import MDBox from "components/MDBox";
import MDTypography from "../../MDTypography";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  console.log({id})
  return (
    <h1>Details</h1>

  )
}

export default Details;