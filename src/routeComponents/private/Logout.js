import React, {useEffect} from "react"
import {useHistory} from "react-router-dom"

const Logout = (props) => {
    const history = useHistory()
    const { setUserState } = props;
    useEffect( () => {
        localStorage.removeItem('loggedInUser')
        setUserState({user: {}, token: ''})
        history.push("/")
    }, [history, setUserState])

    return(
        <div>
            Logging Out
        </div>
)
}

export default Logout;