import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function ShowAlert(props) {
    return props.alert && <Alert severity={`${props.alert.type}`}>{props.alert.message}</Alert>
}