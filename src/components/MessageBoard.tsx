import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { MessageCircle, Send, Users } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Message {
  id: string;
  content: string;
  created_at: string;
  author_name: string;
  author_id: string;
  is_admin: boolean;
}

export function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchMessages();
    // Set up real-time subscription for new messages
    const subscription = supabase
      .channel('messages')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          const newMsg = payload.new as Message;
          setMessages(prev => [newMsg, ...prev]);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchMessages = async () => {
    try {
      // For now, we'll use mock data since the messages table types aren't generated yet
      const mockMessages: Message[] = [
        {
          id: '1',
          content: 'Welcome to the VaultForge Capital investor message board! Feel free to share your thoughts and questions.',
          created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          author_name: 'VaultForge Team',
          author_id: 'admin',
          is_admin: true,
        },
        {
          id: '2', 
          content: 'Looking forward to the Q1 results. Great portfolio performance so far!',
          created_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
          author_name: 'John Investor',
          author_id: 'user1',
          is_admin: false,
        }
      ];
      setMessages(mockMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast.error('Failed to load messages');
    } finally {
      setLoadingMessages(false);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !user) return;

    setIsLoading(true);
    try {
      // For now, we'll add to local state since the messages table types aren't generated yet
      const newMsg: Message = {
        id: Math.random().toString(),
        content: newMessage.trim(),
        author_id: user.id,
        author_name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'Anonymous',
        is_admin: false,
        created_at: new Date().toISOString(),
      };
      
      setMessages(prev => [newMsg, ...prev]);
      setNewMessage('');
      toast.success('Message sent!');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (loadingMessages) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="flex items-center gap-2">
              Investor Message Board
              <Badge variant="secondary" className="text-xs">
                <Users className="h-3 w-3 mr-1" />
                Live
              </Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Connect with fellow investors and the management team
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Message Input */}
        <div className="space-y-3">
          <Textarea
            placeholder="Share your thoughts or ask a question..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="min-h-[100px] resize-none"
            maxLength={500}
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {500 - newMessage.length} characters remaining
            </span>
            <Button 
              onClick={sendMessage}
              disabled={!newMessage.trim() || isLoading}
              size="sm"
              className="gap-2"
            >
              <Send className="h-4 w-4" />
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </div>

        {/* Messages List */}
        <div className="space-y-4 max-h-[600px] overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <MessageCircle className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No messages yet. Be the first to start the conversation!</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className="flex gap-3 p-4 rounded-lg bg-card/50 border border-border/50"
              >
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary font-medium">
                    {getInitials(message.author_name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{message.author_name}</span>
                    {message.is_admin && (
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                        Admin
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(message.created_at), { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}