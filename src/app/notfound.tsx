import React from 'react';

export const NotFound: React.FC = () => {
    return (
        <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="max-w-max mx-auto">
                <main className="sm:flex">
                <p className="text-4xl font-extrabold text-purple-600 sm:text-5xl">404</p>
                <div className="sm:ml-6">
                    <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">페이지를 찾을 수 없습니다.</h1>
                    <p className="mt-1 text-base text-gray-500">URL을 확인해주세요.</p>
                    </div>
                    <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                    <a href="/dashboard" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        홈으로 가기
                    </a>
                    <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Contact support
                    </a>
                    </div>
                </div>
                </main>
            </div>
        </div>

    )
}