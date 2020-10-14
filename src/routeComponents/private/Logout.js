import React, {useEffect} from "react"
import {useHistory} from "react-router-dom"

const Logout = (props) => {
const history = useHistory()
useEffect( () => {
    localStorage.removeItem('loggedInUser')
    props.setUserState({user: {}, token: ''})
    history.push("/")
}, [])

return(
    <div>
        Logging Out
    </div>
)
}

export default Logout;