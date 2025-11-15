import React from "react";

export function ChatInterface() {
    return (
        <div className="flex flex-col h-full">
            <div className="rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col  overflow-hidden shadow-sm mx-4 mt-4">
                <div className="p-3  border-b border-gray-200 dark:border-gray-700 font-bold text-center">
                    チャット
                </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto text-sm bg-gray-50 dark:bg-gray-900">
                <div className="text-center text-gray-500 dark:text-gray-400">
                    ようこそ！何かご質問はありますか？
                </div>
            </div>

            <div className="mt-3 p-3 bg-white dark:bg-gray-800">
                <input
                    type="text"
                    placeholder="メッセージを入力..."
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
}