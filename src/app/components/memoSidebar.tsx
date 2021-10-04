

export const MemoSidebar  = ({ notes , onAddNote, onDeleteNote, activeNote, setActiveNote } : { notes : any , onAddNote : any, onDeleteNote : any, activeNote : any, setActiveNote : any }) => {

    const sortedNotes = notes.sort((a : any, b: any) => b.lastModified - a.lastModified);

    return (
        <div className="w-1/3 h-screen border-r-2 border-gray-400">
            <div className="flex justify-between p-2">
                <h1 className="m-0">메모 리스트</h1>
                <button className="bg-gray-500 hover:bg-gray-400 hover:text-gray-800 py-1 px-2 rounded-md text-white" onClick={onAddNote}>Add</button>
            </div>
            <div className="">
                {sortedNotes.map((note: any) => ( 
                    <div className={`px-2 py-4 mt-1 cursor-pointer hover:bg-gray-300 ${note.id === activeNote && "bg-gray-200"}`}
                        onClick={() => setActiveNote(note.id)}>
                        <div className="flex justify-between">
                            <strong>{note.title}</strong>
                            <button className="bg-red-500 hover:bg-red-400 hover:text-gray-500 py-1 px-2 rounded-md text-white" onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </div>

                        <p className="ml-1">{note.body && note.body.substr(0, 100) + "..."}</p>
                        <small className="block text-gray-500">
                            Last modified {new Date(note.lastModified).toLocaleDateString("en-GB", {
                                hour : "2-digit",
                                minute : "2-digit"
                            })}
                        </small>

                    </div>
                ))}
            </div>
        </div>
    )
}