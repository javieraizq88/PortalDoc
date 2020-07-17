const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            username: null,
            currentUser: null,
            isAuthenticated: false,
            email: null,
            password: null, 
            role: null, 
            error: null,

            
        },
        
        actions: {
            isAuthenticated: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
                        isAuthenticated: sessionStorage.getItem('isAuthenticated')
                    })
                }
            },

            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },

            login: (e, history, role_id, re_route) => {
                e.preventDefault()
                const store = getStore();
                fetch(store.path + '/login/' + role_id, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: store.email,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                error: data
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                email: null,
                                password: null,
                                error: null,
                                role: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push('/' + re_route)
                        }
                    })
            },

            getConfirmation: () => {
                const store = getStore()
                const data = {
                    email: store.email
                }
                if(store.role == null){
                    alert('Tienes que escoger el tipo de cuenta')
                }
                fetch(store.path + '/reset_password/'+store.role, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                        if (data.success) {
                            setStore({
                                email_confirm_success: data.success
                            })
                        } else {
                            alert(data.msg)
                            setStore({
                                email_confirm_msg: data.msg,
                            })
                        }
                    })
            },

            
        }
    }
}
export default getState;