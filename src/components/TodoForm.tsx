import React from 'react';
interface TodoFormProps {
    onAdd(title:string):void;
}

// --------------------- Пример обработки с использованием useState, контролированный инпут

// const TodoForm: React.FC = () => {

//     const [title, setTitle] = React.useState<string>('');

//     const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setTitle(event.target.value);
//     }

//     const keypressHandler = (event: React.KeyboardEvent) => {
//         if(event.key === 'Enter') {
//             console.log('title', title);
//             setTitle('');
//         }
//     }

//     return (
//         <div className="input-field mt2">
//             <input 
//             onChange={changeHandler} 
//             value={title} 
//             type="text" 
//             id="title" 
//             placeholder="Введите название дела"
//             onKeyPress={keypressHandler}
//             />
//             <label htmlFor="title" className="active">Введите название дела</label>
//         </div>
//     );
// };

// --------------------- Пимер работы с инпутом с помощью хука useRef

const TodoForm: React.FC<TodoFormProps> = (props) => {

    const inputRef = React.useRef<HTMLInputElement>(null);

    const keypressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.onAdd(inputRef.current!.value);
            inputRef.current!.value = '';
        }
    }

    return (
        <div className="input-field mt2">
            <input  
            ref={inputRef}
            type="text" 
            id="title" 
            placeholder="Введите название дела"
            onKeyPress={keypressHandler}
            />
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    );
};

export default TodoForm;