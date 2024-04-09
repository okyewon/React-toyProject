import { ChangeEvent, FormEvent } from "react";
import { RiChatNewLine } from "react-icons/ri";
import style from './TodoInput.module.css';

interface TodoInputProps {
    text: string
    onTextChange: (text: string) => void 
    onSubmit: () => void
}

const TodoInput = (props: TodoInputProps) => {
    const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        props.onTextChange(event.target.value);
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault(); // submit 이 동작해도 새로고침 X
        props.onSubmit();
    }

    return (
        <section className={style.container}>
            <form className={style.formContainer} onSubmit={handleSubmit}>
                <input className={style.input} placeholder={'해야 할 Todo'} value={props.text} onChange={handleInputChanged} />
                <button className={style.enter}><RiChatNewLine /></button>
            </form>
        </section>
    )
}

export default TodoInput;