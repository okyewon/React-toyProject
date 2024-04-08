import { RiChatNewLine } from "react-icons/ri";
import style from './TodoInput.module.css';

const TodoInput = () => {
    return (
        <section className={style.container}>
            <form className={style.formContainer}>
                <input className={style.input} placeholder={'해야 할 Todo'} />
            </form>
            <button className={style.enter}><RiChatNewLine /></button>
        </section>
    )
}

export default TodoInput;