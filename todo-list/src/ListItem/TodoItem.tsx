import styles from './TodoItem.module.css';
import { BsCheckCircle } from 'react-icons/bs';
import { IoMdRemoveCircleOutline } from "react-icons/io";

interface TodoItemProps {
    text: string
}

const TodoItem = (props: TodoItemProps) => {
    const isCheck = false;

    return (
        <li className={styles.container}>
            <BsCheckCircle className={[styles.checkIcon, `${isCheck ? styles.checkedIcon : styles.unCheckedIcon}`].join(" ")} />
            <span>{props.text}</span>
            <IoMdRemoveCircleOutline className={styles.removeIcon} />
        </li>
    )
}

export default TodoItem;