import { Header } from './header';
import ReactMarkdown from 'react-markdown';

export const MemoMain = ({ activeNote, onUpdateNote } : {activeNote : any, onUpdateNote: any}) => {

    const onEditField = (key : string, value: string) => {
        onUpdateNote({
            ...activeNote,
            [key] : value,
            lastModified: Date.now(),
        })
    }; 

    if(!activeNote) return <div className="w-2/3 h-screen text-center text-base bg-gray-100">선택된 메모가 없습니다.</div>

    return (
        <div className="w-2/3 h-screen p-2">
            <div className="h-1/2 w-full">
                <input className="h-10 block border-2 border-solid border-gray-200 w-full p-2 resize-none text-base" type="text" id="title" value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} />
                <textarea className="mt-2 h-5/6 block border-2 border-solid border-gray-200 w-full p-2 resize-none text-base" id="body" placeholder="내용을 입력하세요." value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)} />
            </div>
            <div className="h-1/2 border-2 border-solid border-gray-300 overflow-y-hidden bg-gray-100">
                <h1 className="py-1 px-2 m-0">{activeNote.title}</h1>
                <article className="prose px-2">
                    {activeNote.body}
                </article>
            </div>
        </div>
    )
}