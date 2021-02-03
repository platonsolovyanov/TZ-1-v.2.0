import { Route } from 'react-router-dom';
const styles = {
    root: {
        width: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '150px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px'

    }
}

export default function LoginContainer({ onSubmit, register, handleSubmit }) {

    return (
        <div style={styles.root} onSubmit={handleSubmit(onSubmit)}>
            <form style={styles.form} action="" className='App'>

                <label htmlFor="login">Login:</label>
                <input ref={register} name="login" />

                <label htmlFor="login">Password:</label>
                <input ref={register} name="password" type='password' />

                <input type="submit" />
            </form>
        </div>
    )
}