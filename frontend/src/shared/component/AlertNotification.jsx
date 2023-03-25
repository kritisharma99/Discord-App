import React from 'react'
import { Alert } from '@mui/material'
import { Snackbar } from '@mui/material'
import { connect } from 'react-redux'
import { getActions } from "../../store/actions/alertAction"


function AlertNotification({
    //state mapping 
    showAlertmessage,
    alertMessageContent,
    //action mapping
    closeAlertMessage}) {
  return (
    <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal:'center'}}
        open={showAlertmessage}
        onClose={closeAlertMessage}
        // autoHideDuration={6000}
    >
      <Alert severity='info'>{alertMessageContent}</Alert>
    </Snackbar>
  )
}
const mapStateToProps = ({ alert }) =>{
    return{
        ...alert,
    }
}

const mapActionsToProps = (dispatch) =>{
    return{
      ...getActions(dispatch),
    }
  }

// export default AlertNotification
export default connect(mapStateToProps, mapActionsToProps)(AlertNotification)