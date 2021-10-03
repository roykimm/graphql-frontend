export const Header : React.FC = () => {

    return (
        <div className="flex items-center justify-between">
            <div className="">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Gobella
                </h2>
            </div>
            <div className="flex align-center justify-center">
                <h4 className="text-sm mr-5 align-center">안녕하세요?</h4>
                <button type="button" className="items-center px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                로그아웃
                </button>
            </div>
        </div>
    )
}