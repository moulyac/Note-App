import {useState} from 'react';
interface INotes {
  id: string;
  title: string;
  description?: string;
}

const Util = () => {
  const [textInput, setTextInput] = useState('');
  //   const [titles, setTitles] = useState<string[]>([]);
  const [notes, setNotes] = useState<INotes[] | []>([]);

  const addNote = () => {
    setNotes([
      ...notes,
      {title: textInput, id: new Date().valueOf().toString()},
    ]);
    setTextInput('');
  };

  const updateNote = (
    updatedNote: {title: string; description: string},
    id: string,
    notesList: INotes[],
  ) => {
    console.log(updatedNote, id, 'lo', notesList);
    const updateNoteList = notes.map(item => {
      console.log(item);
      if (item.id === id) {
        console.log(item, 'here');
        return {
          ...item,
          title: updatedNote.title,
          description: updatedNote.description,
        };
      } else {
        return item;
      }
    });
    console.log(updateNoteList, 'update');
    setNotes(updateNoteList);
  };

  return {
    textInput,
    addNote,
    updateNote,
    // titles,
    setTextInput,
    notes,
  };
};
export default Util;
