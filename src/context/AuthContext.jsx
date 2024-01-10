/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext} from "react";

const AuthContext = createContext();
export default AuthContext;

// export const AuthProvider = ({children}) => {
//     const [isAuth, setIsAuth] = useState(false);
//     console.log(isAuth);
//     const login = ({ ...data }) => {
       
//         setIsAuth(data);
//         localStorage.setItem('set-Auth',isAuth)
//     };
//     return (
//         <AuthContext.Provider value={{ isAuth, login }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
// export default function useAuthContext() {
//   return useContext(AuthContext);
// }
