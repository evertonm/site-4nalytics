import style from '../styles/pages/Login.module.css';

export default function Login() {
    return (

        <div className={style.loginContainer}>
            <div>
                <img src="/gradient.svg" alt="gradient" />
            </div>
            <div className={style.loginSide}>
                <img src="/logo-login.svg" alt="Logo"/>

                <h1>Bem vindo</h1>
                <div className={style.githubInfo}>
                    <img src="/github.svg" alt="Github Image"/>
                    <span>Faça login com seu Github para começar</span>
                </div>
                <div>
                    <div className={style.inputContainer}>

                        <input type="text" placeholder="Digite seu username"/>
                    </div>
                    <button>
                        <img src="/icons/arrow-right.svg" alt="Arrow Right"/>
                    </button>
                </div>

            </div>
        </div>
    )
}