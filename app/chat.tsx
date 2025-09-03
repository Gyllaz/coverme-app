// app/(tabs)/home/chat.tsx
import React, { useCallback, useState, ReactNode } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { BackArrow } from '@/components';
import {
  Chat,
  defaultTheme,
  type Theme,
  type User,
  type MessageType, // <- namespaced types
} from '@flyerhq/react-native-chat-ui';

export default function ChatScreen() {
  const router = useRouter();

  const me: User = { id: 'user', firstName: 'You' };
  const bot: User = { id: 'bot', firstName: 'CoverMe Ai', };

  const [messages, setMessages] = useState<MessageType.Any[]>([
    {
      id: 'seed-1',
      author: bot,
      createdAt: Date.now(),
      type: 'text',
      text: 'Hi! I’m the CoverMe Ai. Ask me anything about the app and how to use it.',
    } as MessageType.Text,
  ]);

  const append = useCallback((m: MessageType.Any) => {

    setMessages(prev => [m, ...prev]);
  }, []);


  const onSendPress = useCallback((partial: MessageType.PartialText) => {
    const text = partial.text?.trim();
    if (!text) return;

    const userMsg: MessageType.Text = {
      id: String(Date.now()),
      author: me,
      createdAt: Date.now(),
      type: 'text',
      text,
    };
    append(userMsg);

    // Stubbed bot reply — replace with your backend later
    setTimeout(() => {
      const reply: MessageType.Text = {
        id: String(Date.now() + 1),
        author: bot,
        createdAt: Date.now(),
        type: 'text',
        text: 'Thanks! I’ll be able to answer once the backend is wired up. 😊',
      };
      append(reply);
    }, 400);
  }, [append]);

  // Brand theme (only override valid keys)
const theme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,

    // App background
    background: '#F8F8FF',

    // Input field
    inputBackground: '#5050C2',
    inputText: '#FFFFFF',
    inputPlaceholderText: '#8D8DAA',

    // Outgoing (me) bubbles
    primary: '#5050C2',
    primaryText: '#FFFFFF',

    // Incoming (bot) bubbles
    secondary: '#E4E4F7',
    secondaryText: '#5050C2',

    // Avatars / UI
    avatar: '#5050C2',
    sendButton: '#5050C2',
    link: '#5050C2',
  },

  borders: {
    ...defaultTheme.borders,
    inputBorderRadius: 30,
    messageBorderRadius: 20,
  },

  // Optional custom fonts if you’ve loaded them
  fonts: {
    ...defaultTheme.fonts,
    regular: { ...defaultTheme.fonts.regular, fontFamily: 'Poppins-Regular' },
    bold: { ...defaultTheme.fonts.bold, fontFamily: 'Poppins-SemiBold' },
  },

};



const renderBubble = ({
  child,
  message,
  nextMessageInGroup,
}: {
  child: ReactNode
  message: MessageType.Any
  nextMessageInGroup: boolean
}) => {
  return (
    <View
      style={{
        backgroundColor: me.id !== message.author.id ? '#F8F8FF' : '#5050C2',
        borderBottomLeftRadius:
          !nextMessageInGroup && me.id !== message.author.id ? 20 : 0,
        borderBottomRightRadius:
          !nextMessageInGroup && me.id === message.author.id ? 20 : 0,
        borderColor: '#5050C2',
        borderWidth: 2,
        overflow: 'hidden',
      
      }}
    >
      {child}

    </View>
  )
}

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Simple top bar */}
      <View
        className='mt-[13%] pb-[1rem]'
        style={{
          height: 56,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
          borderBottomWidth: 1,
          borderBottomColor: '#EEE',
        }}
      >
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }} className='pb-[2.5rem] mr-[3rem]'>
          <BackArrow />
        </TouchableOpacity>
        <Text className='font-[2rem]' style={{ marginLeft: 8, fontSize: 30, color: '#5050C2', fontWeight: '600' }}>
          CoverMe Ai
        </Text>
      </View>


      <Chat
        messages={messages}
        onSendPress={onSendPress}
        user={me}
        renderBubble={renderBubble}
        theme={theme}
        sendButtonVisibilityMode="editing"
        textInputProps={{ placeholder: 'Ask about claims, savings, or policy…' }}
        showUserNames={false}
        showUserAvatars
        enableAnimation
        
      />
    </View>
  );
}
