import { useSelector } from 'react-redux'

export  const getLoginData=()=> {
    const Data = useSelector(S => S.login.loginData);
    return Data
}
