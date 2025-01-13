import { useCallback } from 'react';

import { recordChatActivity } from '../utils/recordChatActivity';

export const useChatHandler = () => {
  const handleNewChat = useCallback(() => {
    // Record the chat activity
    recordChatActivity();
    
    // Add your other chat handling logic here
    // For example: sending messages, updating UI, etc.
  }, []);

  return { handleNewChat };
};