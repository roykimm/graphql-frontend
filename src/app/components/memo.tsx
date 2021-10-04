import { useState , useEffect, useContext} from 'react';
import { Header } from './header';
import { v4 as uuidv4 } from 'uuid';
import { AppStateContext, fetchAccessToken } from '../provider';
import { MemoSidebar } from './memoSidebar';
import { MemoMain } from './memoMain';
import { useMemoRegisterMutation } from '../../gql/generated/graphql';

export const Memo : React.FC = () => {

    const [notes, setNotes] = useState<Array<INote>>([]);
    const [activeNote, setActiveNote] = useState<Boolean>(false);
    const { appState, appSetLogin, appSetLogout, gqlError , appSetAlert} = useContext(AppStateContext);
    const [ memoRegister ] = useMemoRegisterMutation();

    console.log(appState.username)
    console.log(appState.email)

    useEffect(() => {

    }, [notes])

    interface INote {
        id : string;
        email : string;
        username : string;
        title : string;
        content: string;
        created_at : string;
        updated_at : string;
    }

    const onAddNote = async () => {
        const newNote : INote = { 
            id : uuidv4(),
            email : appState.email || 'guest@guest.com',
            username : appState.username || 'guest',
            title : "Untitled Note",
            content: "",
            created_at : (Date.now()).toString(),
            updated_at : (Date.now()).toString()        
        };
        const { data } = await memoRegister({ variables : newNote });
        if (data === undefined || data?.memoRegister === undefined ) {
            throw new Error('Invalid credentials');
        }
        //history.replace(`/confirm/${data?.register?.tmp_confirm_token}`);
        console.log(data)
        setNotes([newNote, ...notes]);
    }

    const onDeleteNote = (idToDelete: string) => {
        setNotes(notes.filter((note: INote) => note.id !== idToDelete));
    }

    // help function
    const getActiveNote = () => {
        return notes.find((note: INote) => note.id ? true : false === activeNote);
    };

    const onUpdateNote = (updatedNote: INote) => {
        const updatedNotesArray = notes.map((note: INote) => {
            if(note.id ? true : false === activeNote) {
                return updatedNote;
            }

            return note;
        });
        setNotes(updatedNotesArray);
    }

    return (
        <div>
            <Header />
            <div className="w-full h-full overflow-hidden flex">
                <MemoSidebar 
                    notes={notes} 
                    onAddNote={onAddNote} 
                    onDeleteNote={onDeleteNote}
                    activeNote={activeNote}
                    setActiveNote={setActiveNote}
                />
                <MemoMain 
                    activeNote={getActiveNote()}
                    onUpdateNote={onUpdateNote} 
                />
            </div>
        </div>
    )
}