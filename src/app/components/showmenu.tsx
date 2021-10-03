

export const Showmenu : React.FC = () => {
    return (
        <div className="mt-5">
            <h2 className="text-gray-500 text-lg font-bold uppercase tracking-wide">사용가능한 앱</h2>
            <div className="">
                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <li className="col-span-1 flex shadow-sm rounded-md">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
                        MEMO
                    </div>
                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div className="flex-1 px-4 py-2 text-sm truncate">
                        <a href="#" className="text-gray-900 font-medium hover:text-gray-600">Memo앱 가기</a>
                        <p className="text-gray-500">필요한 정보를 메모앱으로 관리하세요.</p>
                        </div>
                        <div className="flex-shrink-0 pr-2">
                        <a href="/memo" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        </a>
                        </div>
                    </div>
                    </li>
                    <li className="col-span-1 flex shadow-sm rounded-md">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 bg-indigo-600 text-white text-sm font-medium rounded-l-md">
                        TODO
                    </div>
                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div className="flex-1 px-4 py-2 text-sm truncate">
                        <a href="#" className="text-gray-900 font-medium hover:text-gray-600">TODO앱 가기</a>
                        <p className="text-gray-500">할일을 관리하세요.</p>
                        </div>
                        <div className="flex-shrink-0 pr-2">
                        <a href="/todo" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        </a>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
            <h2 className="text-red-500 text-lg font-bold uppercase tracking-wide mt-10">사용준비중인 앱</h2>
            <div className="">
                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <li className="col-span-1 flex shadow-sm rounded-md">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
                        IMG
                    </div>
                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div className="flex-1 px-4 py-2 text-sm truncate">
                        <a href="#" className="text-gray-900 font-medium hover:text-gray-600">사진첩관리</a>
                        <p className="text-gray-500">내사진을 관리하세요.</p>
                        </div>
                        <div className="flex-shrink-0 pr-2">
                        <a href="/memo" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        </a>
                        </div>
                    </div>
                    </li>
                    <li className="col-span-1 flex shadow-sm rounded-md">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 bg-indigo-600 text-white text-sm font-medium rounded-l-md">
                        CONT
                    </div>
                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                        <div className="flex-1 px-4 py-2 text-sm truncate">
                        <a href="#" className="text-gray-900 font-medium hover:text-gray-600">연락처 관리</a>
                        <p className="text-gray-500">연락처를 관리하세요.</p>
                        </div>
                        <div className="flex-shrink-0 pr-2">
                        <a href="/memo" className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        </a>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}