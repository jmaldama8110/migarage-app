// Higher Order Component (HOC) pattern

import React from 'react';
import ReactDOM from 'react-dom';

// const Info = (props) => (
//     <div>
//         <h1>Info - child component</h1>
//         <p>the info is: {props.info}</p>
//     </div>

// );

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             <h1>Parent component</h1>
//             { props.isAdmin && <p>Informacion privada aqui..</p> }
//             <WrappedComponent {...props}/>
//         </div>
//     );
// }

// const AdminInfo = withAdminWarning(Info);

const Info = (props) => (
    <div>
        <h1>Info Autenticacion- child component</h1>
        <p>Mensaje de Autenticacion: {props.info}</p>
    </div>

);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            
            { props.isAuthenticated && <WrappedComponent {...props}/>}
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo info="detalles del componente aqui.." isAdmin={true}/>,document.getElementById('app') );
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Mi nombres: JOSIMAN!"/>,document.getElementById('app') );
