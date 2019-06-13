import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            {
                title,
                body
            }
        ])
        setTitle('')
        setBody('')
    }

    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    }

    useEffect(() => {
        console.log("Should only run once!")
        const notesData = JSON.parse(localStorage.getItem('notes'))

        if (notesData) {
            setNotes(notesData)
        }
    },[])

    useEffect(() => {
        console.log('Change in notes!')
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])

    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note) => (
                <Note key={note.title} note={note} removeNote={removeNote}/>
            ))}
            <p>Add note</p>
            <form onSubmit={addNote}>
                Title: <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
                <br></br>
                Body: <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"></textarea>
                <button>Add Note</button>
            </form>
        </div>
    )
}

const Note = (note, removeNote) => {
    useEffect(() => {
        console.log('Setting up effect!')

        return () => {
            console.log('Cleaning up effect!')
        }
    }, [])
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>X</button>
        </div> 
    )
}

// const App = (props) => {
//     const [count, setCount] = useState(props.count)
//     const [text, setText] = useState('')

//     useEffect(() => {
//         console.log("This should only run once!")
//     }, [])

//     useEffect(() => {
//         console.log('useEffect Ran')
//         document.title = count
//     }, [count])

//     return (
//         <div>
//             <p>The current {text || 'count'} is {count}.</p>
//             <button onClick={() => setCount(count - 1)}>-1</button>
//             <button onClick={() => setCount(props.count)}>Reset</button>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <input value={text} onChange={(e) => setText(e.target.value)}/>
//         </div>
//     )
// }

// App.defaultProps = {
//     count: 0
// }

ReactDOM.render(<NoteApp/>, document.getElementById('root'));

serviceWorker.unregister();
