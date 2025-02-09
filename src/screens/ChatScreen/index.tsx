import React, { useState, useCallback, useEffect } from 'react';
import i18n from 'i18n-js';
import { View, TouchableOpacity, Alert, Text, Dimensions, Platform } from 'react-native';
import { Avatar, Bubble, Composer, GiftedChat, IMessage, InputToolbar } from 'react-native-gifted-chat';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { styles } from './styles';
import useConnection from '../../hooks/useConnection';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import { Modalize } from 'react-native-modalize';
import chatGPT4 from '../../services/openAi4';
import { useModel } from '../../context/ModelContext';
import deepSeek from '../../services/deepseek';
//import useRevenueCat from '../../hooks/useRevenueCat';

export default function ChatScreen({ navigation }: any) {
  const [messages, setMessages]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  //const [messageCount, setMessageCount] = useState(10);
  const { modelVersion } = useModel();
  //const [favoriteMessages, setFavoriteMessages] = useState([]);
  //const inputRef = useRef(null);
  //const modalizeRef = useRef<Modalize>(null);
  //const { isProMember } = useRevenueCat();
  const maxHeight = Dimensions.get('window').height * 0.2;
  const is_connected = async () => await useConnection();

  const models = ["gpt-4o-mini", "gpt-4o", "o1-mini", "o1"]

  /* const onOpen = () => {
    inputRef.current?.textInput?.blur();
    modalizeRef.current?.open();
  }; */

  /* const toggleFavorite = (message) => {
    if (message.user._id === 2) {
      const isFavorite = favoriteMessages.some((msg) => msg._id === message._id);
      console.log(isFavorite)
      if (isFavorite) {
        setFavoriteMessages((prevFavMessages) =>
          prevFavMessages.filter((msg) => msg._id !== message._id)
        );
      } else {
        setFavoriteMessages((prevFavMessages) => [...prevFavMessages, message]);
      }

      // Actualiza los mensajes con el nuevo estado de favoritos
      setMessages((prevMessages) =>
        prevMessages.map((msg) => {
          if (msg._id === message._id) {
            return { ...msg, isFavorite: !isFavorite };
          }
          return msg;
        })
      );
    }
  }; */

  /* const clearConversation = async () => {
    Alert.alert(
      i18n.t('clearConversationTitle'),
      i18n.t('clearConversationText'),
      [
        {
          text: i18n.t('cancel'),
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: i18n.t('confirm'),
          onPress: async () => {
            await AsyncStorage.removeItem('messages');
            setMessages([]);
          },
        },
      ],
      { cancelable: false },
    );
  }; */

  // Crea el componente personalizado HeaderRightButtons
  /* const HeaderRightButtons = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {messages.length === 0 ?
          null :
          <TouchableOpacity onPress={clearConversation} style={{ marginRight: 10 }}>
            <Ionicons name="trash" size={24} color="white" />
          </TouchableOpacity>
        }
        {/* {!isProMember && (
          <TouchableOpacity onPress={onOpen}>
            <Ionicons name="chatbubble" size={24} color="white">
              <Text>{messageCount}</Text>
            </Ionicons>
          </TouchableOpacity>
        )}
      </View>
    );
  }; */

  /* async function loadFavoriteMessages() {
    const storedFavoriteMessages = await AsyncStorage.getItem('favoriteMessages');
    if (storedFavoriteMessages) {
      setFavoriteMessages(JSON.parse(storedFavoriteMessages));
    }
  } */

  /* useEffect(() => {
    loadFavoriteMessages();
  }, []); */

  // Modifica la función useEffect que maneja el contador de mensajes
  /* useEffect(() => {
    if (!isProMember) {
      navigation.setOptions({
        headerRight: () => <HeaderRightButtons />,
      });
    } else {
      // Si el usuario es miembro Pro, eliminar el headerRight
      navigation.setOptions({
        headerRight: () => null,
      });
    }
  }, [isProMember, /* messageCount,  messages]); */

  /* useEffect(() => {
    AsyncStorage.setItem('favoriteMessages', JSON.stringify(favoriteMessages));
  }, [favoriteMessages]); */

  /* const switchModelVersion = () => {
    const currentIndex = models.indexOf(modelVersion);
    const nextIndex = (currentIndex + 1) % models.length;
    setModelVersion(models[nextIndex]);
  }; */

  /* async function loadMessages() {
    const storedMessages = await AsyncStorage.getItem('messages');
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages);
      const updatedMessages = parsedMessages.map((msg) => {
        if (msg.user._id === 2) {
          //const isFavorite = favoriteMessages.some((favMsg) => favMsg._id === msg._id);
          return { ...msg, isFavorite };
        }
        return msg;
      });
      setMessages(updatedMessages);
    }
  } */

  /* async function loadMessageCount() {
    const storedMessageCount = await AsyncStorage.getItem('messageCount');
    if (storedMessageCount) {
      setMessageCount(parseInt(storedMessageCount));
    }
  } */

  /* const resetDailyMessageCount = async () => {
    setMessageCount(10);
    await AsyncStorage.setItem('messageCount', '10');
  } */

  /* const checkAndResetDailyMessageCount = async () => {
    const lastResetDate = await AsyncStorage.getItem('lastResetDate');
    const today = new Date().toDateString();

    if (lastResetDate !== today) {
      await AsyncStorage.setItem('lastResetDate', today);
      resetDailyMessageCount();
    }
  } */

  const handleBurgerNavigation = () => navigation.navigate('Configuration');

  const handleModelNavigation = () => navigation.navigate('Models');

  //const handlePayNavigation = () => navigation.navigate('Subscription');

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <>
          <TouchableOpacity onPress={handleBurgerNavigation}>
            <Octicons name="three-bars" size={30} color="white" />
          </TouchableOpacity>
        </>;
      },
    })
    if (!is_connected) {
      Alert.alert(`${i18n.t('noInternet')}`);
    }
    //loadMessages();
    //loadMessageCount();
    //checkAndResetDailyMessageCount();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity style={{ marginLeft: Platform.OS === "android" ? 60 : 0 }} onPress={handleModelNavigation}>
          <Text style={{ color: 'white' }}>{modelVersion}</Text>
        </TouchableOpacity>
      ),
    });
  }, [modelVersion]);

  const onSend = useCallback(async (newMessages: string[] = []) => {
    const newMessageId = Math.random().toString(36).substring(7);
    const botMessageId = newMessageId + "_bot";

    setMessages((previousMessages: IMessage[] | undefined) =>
      GiftedChat.append(previousMessages, [
        {
          _id: newMessageId,
          text: newMessages,
          createdAt: new Date(),
          user: {
            _id: 1
          }
        }
      ])
    );

    setMessages((previousMessages: { _id: string; text: string; createdAt: Date; user: { _id: number; name: string; avatar: any; }; }[] | undefined) =>
      GiftedChat.append(previousMessages, [
        {
          _id: botMessageId,
          text: "",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'ChatGPT',
            avatar: require('../../assets/images/icon.png')
          }
        }
      ])
    );

    // Función para actualizar el mensaje del bot en tiempo real
    const updateBotMessage = (chunk: string) => {
      setMessages((previousMessages) =>
        previousMessages.map((msg) =>
          msg._id === botMessageId ? { ...msg, text: chunk } : msg
        )
      );
    };

    await deepSeek(newMessages, modelVersion, updateBotMessage, setIsLoading);
    //setIsLoading(true);
    //const response = modelVersion == "deepseek/deepseek-r1:free" ? await deepSeek(newMessages, modelVersion) : await chatGPT4(newMessages, modelVersion);


    // Save messages to AsyncStorage
    /* const messagesToSave = GiftedChat.append(messages, [
      {
        _id: newMessageId + 1,
        text: response,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'ChatGPT',
          avatar: require('../../assets/images/icon.png')
        }
      },
      {
        _id: newMessageId,
        text: newMessages,
        createdAt: new Date(),
        user: {
          _id: 1
        }
      },
    ]);
    await AsyncStorage.setItem('messages', JSON.stringify(messagesToSave)); */
    //setIsLoading(false);

    // Update message count and save to AsyncStorage
    /* if (!isProMember) {
      const newMessageCount = messageCount - 1;
      setMessageCount(newMessageCount);
      await AsyncStorage.setItem('messageCount', newMessageCount.toString());

      if (newMessageCount == 0) {
        Alert.alert(`${i18n.t('limitTitle')}`, `${i18n.t('limitText')}`);
      }
    } */
  }, [messages, /* messageCount, */ modelVersion]);

  const handleSend = async (text: string | string[] | undefined) => {
    onSend(text);
    setNewMessage('');
  };

  const formatText = (text: string) => {
    // Dividir el texto en líneas
    const lines = text.split('\n');

    return lines.map((line, lineIndex) => {
      // Verificar si la línea comienza con ###
      const isLargeLine = line.startsWith('###');
      const lineText = isLargeLine ? line.replace('###', '') : line;

      // Expresión regular para detectar bloques envueltos en **
      const boldRegex = /\*\*(.*?)\*\*/g;

      // Dividir la línea en segmentos normales y segmentos en negrita
      const segments = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(lineText)) !== null) {
        // Agregar el texto normal antes del bloque en negrita
        if (match.index > lastIndex) {
          segments.push({
            text: lineText.substring(lastIndex, match.index),
            isBold: false,
          });
        }

        // Agregar el texto en negrita
        segments.push({
          text: match[1], // El contenido dentro de los **
          isBold: true,
        });

        // Actualizar el último índice
        lastIndex = boldRegex.lastIndex;
      }

      // Agregar el texto normal restante después del último bloque en negrita
      if (lastIndex < lineText.length) {
        segments.push({
          text: lineText.substring(lastIndex),
          isBold: false,
        });
      }

      return (
        <Text
          key={lineIndex}
          style={{
            color: 'white',
            padding: 10,
            fontSize: isLargeLine ? 20 : 16, // Tamaño más grande si es una línea con ###
          }}
        >
          {segments.map((segment, segmentIndex) => (
            <Text
              key={segmentIndex}
              style={{
                fontWeight: segment.isBold ? 'bold' : 'normal', // Negrita si está envuelto en **
              }}
            >
              {segment.text}
            </Text>
          ))}
        </Text>
      );
    });
  };

  return (
    <View style={styles.container}>
      {/* <Modalize
        ref={modalizeRef}
        modalHeight={300}
        modalStyle={{ backgroundColor: '#333333' }}
      >
        {messageCount == 0 ?
          <>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <Ionicons name="chatbubble" size={60} color="white" />
              <Text style={styles.modalText}>{i18n.t('noMoreMessages')}</Text>
            </View>
            <Pressable style={styles.button} onPress={handlePayNavigation}>
              <Text style={styles.buttonText}>{i18n.t('upgrade')}</Text>
            </Pressable>
          </>
          :
          <>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <Ionicons name="chatbubble" size={60} color="white" />
              <Text style={styles.modalText}>{i18n.t('haveMessages').replace("{messageCount}", messageCount)}</Text>
            </View>
            <Pressable style={styles.button} onPress={handlePayNavigation}>
              <Text style={styles.buttonText}>{i18n.t('upgrade')}</Text>
            </Pressable>
          </>
        }
      </Modalize> */}
      <GiftedChat
        messages={messages}
        //ref={inputRef}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        //disableComposer={messageCount == 0 ? true : false}
        isTyping={isLoading}
        placeholder={i18n.t('question')}
        scrollToBottom
        text={newMessage}
        onInputTextChanged={text => setNewMessage(text)}
        renderSend={(props) => (
          <TouchableOpacity
            style={styles.renderSend}
            onPress={() => handleSend(props.text.trim())}
            disabled={!props.text}
          >
            <Ionicons name="send" size={24} color="#F0433A" />
          </TouchableOpacity>
        )}
        renderBubble={(props) => (
          <View style={styles.bubbleContainer}>
            <Bubble
              {...props}
              wrapperStyle={{
                left: {
                  backgroundColor: '#333333',
                },
                right: {
                  backgroundColor: '#F0433A',
                },
              }}
              textStyle={{
                left: {
                  color: 'white',
                },
                right: {
                  color: 'white',
                },
              }}
              renderMessageText={(props) => (
                <View>
                  {formatText(props.currentMessage.text)}
                </View>
              )}
            />
            {/* {props.currentMessage.user._id === 2 && (
              <TouchableOpacity
                style={styles.heartIconContainer}
                onPress={() => toggleFavorite(props.currentMessage)}
              >
                <Ionicons
                  name={
                    props.currentMessage.isFavorite
                      ? 'heart'
                      : 'heart-outline'
                  }
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            )} */}
          </View>
        )}
        renderComposer={(props) => <Composer {...props} textInputStyle={[styles.composerTextInput, { maxHeight: maxHeight * 3, minHeight: 50, marginBottom: 35 }]} multiline />}
        renderInputToolbar={(props) => <InputToolbar {...props} containerStyle={styles.inputTool} />}
        renderAvatar={(props) => (
          <Avatar
            showAvatarForEveryMessage
            {...props}
            source={require('../../assets/images/icon.png')}
            imageStyle={{ width: 200, height: 200 }}
          />
        )}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}
