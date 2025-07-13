import React from 'react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';
import { X } from 'lucide-react';

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  if (!selectedUser) return null;

  return (
    <div className='p-2.5 border-b border-base-300'>
      <div className='flex items-center justify-between'>
        {/* Avatar & Info */}
        <div className='flex items-center gap-3'>
          <div className='avatar'>
            <div className='size-10 rounded-full relative overflow-hidden'> 
              <img
                src={selectedUser.profilePic || '/avatar.png'}
                alt={selectedUser.fullName}
              />
            </div>
          </div>
          <div>
            <h3 className='font-medium'>{selectedUser.fullName}</h3>
            <p className='text-sm text-base-content/70'>
              {onlineUsers.includes(selectedUser._id) ? 'online' : 'offline'}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button onClick={() => setSelectedUser(null)} className="btn btn-sm btn-ghost"> 
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
