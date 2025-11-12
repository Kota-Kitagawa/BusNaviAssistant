import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { ChatInterface } from "../ui/ChatInterface";

export function Chat() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <aside className="
            hidden md:block fixed left-0 top-16 bottom-0 h-full w-80
            bg-white shadow-xl border-l border-gray-200 z-40
            dark:bg-black dark:border-gray-700"
            >
                <ChatInterface />
            </aside>
            <button onClick={(() => setIsOpen(true))}
                className="md:hidden fixed bottom-4 right-6 w-14 h-14 rounded-full
                text-white bg-blue-600 flex items-center justify-center shadow-lg z-50
                hover:bg-blue-700 transition duration-300"
            >
                <MessageCircle size={24} />
            </button>
            {isOpen && (
                <div className="md:hidden fixed inset-0  bg-opacity-50 flex item-center justify-center z-60"
                    onClick={() => setIsOpen(false)}>
                    <div className="bg-white dark:bg-black w-full h-3/4 max-w-md rounded-t-xl shadow-2xl animate-slide-up"
                        onClick={(e) => e.stopPropagation()}>
                        <div className="h-full relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white z-10"
                                title="チャットを閉じる"
                            >
                                <X size={20} />
                            </button>
                            <ChatInterface />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


