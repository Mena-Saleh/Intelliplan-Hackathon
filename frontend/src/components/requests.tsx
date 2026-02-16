export default function Requests({ onNewChat, chats, onSelectChat }) {
  return (
    <>
      <div className="px-4 py-4 border-b border-dark/10">
        <button
          onClick={onNewChat}
          className="w-full bg-accent text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
        >
          + New Request
        </button>
      </div>

      {chats.length === 0 ? (
        <div className="flex-1 px-6 pt-8 text-center">
          <p className="text-sm text-body/50">
            No conversations yet. Start a new chat!
          </p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {chats.map((chat) => {
            const isActive = activeChatId === chat.id;

            return (
              <div
                key={chat.id}
                onClick={() => onSelectChat?.(chat.id)}
                className={`p-4 rounded-2xl cursor-pointer transition-all ${isActive ? "bg-primary/10 shadow-sm" : "hover:bg-black/5"
                  }`}
              >
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">{chat.title}</p>
                    <div className="flex items-center gap-2 text-xs text-body/50 mt-1">
                      <Clock className="w-3 h-3" />
                      {formatDate(chat.createdAt)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
