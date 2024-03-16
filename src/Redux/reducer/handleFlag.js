const flag={loginstatus:false}

const handleFlag=(state=flag,action)=>{
    switch (action.type) {
        case "LOGGEDIN":
            return {loginstatus:true}
        case "LOGGEDOUT":
            return {loginstatus:false}
        default:return state
    }
}
