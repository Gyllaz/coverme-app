import { Text, View, Share, Alert, Animated, Easing, TouchableOpacity } from "react-native";
import { useState, useRef, useEffect } from "react";
import { BackArrow, ShareSVG, CopySVG } from '@/components';
import { banking } from "@/constants/accountInfo";
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';


const { accountName, accountNo, BSB, payID } = banking;



export default function Info() {

  const handleShare = async () => {

    try {
      const message = `Account Name: ${accountName}\nBSB: ${BSB}\nAccount No: ${accountNo}\nPayID: ${payID}`;
      await Share.share({
        message,
      });
    } catch (error: any) {
      Alert.alert('Error', 'Failed to share account information.');
    }
  };

  const handleCopyAccountInfo = async (type: 'bsb' | 'account' | 'name' | 'all') => {
    try {
      let valueToCopy = '';
      let message = '';
      if (type === 'bsb') {
        valueToCopy = BSB;
        message = 'BSB copied to clipboard';
      }
      if (type === 'account') {
        valueToCopy = accountNo;
        message = 'Account number copied to clipboard';
      }
      if (type === 'name') {
        valueToCopy = accountName;
        message = 'Account name copied to clipboard';
      }
      if (type === 'all') {
        valueToCopy = `Account Name: ${accountName} \nBSB: ${BSB}\nAccount No: ${accountNo}`;
        message = 'Account information copied';
      }
      await Clipboard.setStringAsync(valueToCopy);
      setShowModal(false);
      showCopyToast(message);
    } catch (e) {
      console.error("Clipboard error:", e);
    }
  };


  const [showToast, setShowToast] = useState(false);
  const toastAnim = useRef(new Animated.Value(0)).current;

  const [toastMessage, setToastMessage] = useState("Copied to clipboard");


  const [showModal, setShowModal] = useState(false);

  const showCopyToast = (msg: string) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setToastMessage(msg);
    if (!showToast) {
      setShowToast(true);
      Animated.timing(toastAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
    clearTimeout((showCopyToast as any).timer);
    (showCopyToast as any).timer = setTimeout(() => {
      Animated.timing(toastAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setShowToast(false));
    }, 3000);
  };





  // inside Info component

  const handleCopyPayID = async () => {
    try {
      await Clipboard.setStringAsync(payID);
      showCopyToast('PayID copied to clipboard');
    } catch (e) {
      console.error("Clipboard error:", e);
    }
  };



  return (
    <View
      className="bg-white h-full flex gap-[0.1rem] mt-[13%] pt-[4%] rounded-t-[1rem]"
    >

      <BackArrow />
      
      <View className="flex flex-col gap-[1rem] px-[7%]">
        <View className="flex flex-row pt-[2.5rem] gap-[1.5rem] w-full">
          <Text className="text-[#231F20] font-poppins text-[1.7rem] font-[BASKiT-medium]">Account Information</Text>
          <View className="">
            <ShareSVG onPress={handleShare}/>
          </View>
        </View>
        <Text className="text-[1rem] font-[BASKiT-light] text-black w-[80%]">Use PayID or bank transfer to add money to your Rainy Day Fund.</Text>
      </View>

      <View className="flex gap-[1.5rem] pt-[1rem] px-[7%]">
        <View className=" w-full flex ">
          <View className="bg-white w-full border-[3px] border-white flex gap-[0.5rem] py-[2rem] rounded-[15px]"
          >
            <View className="flex flex-row justify-between pb-[0.5rem] mb-[0.5rem] border-b-[1px] border-[#F3F3F1]">
              <Text className="font-[BASKiT-medium] text-[1.3rem] tracking-[0.1rem] text-[#231F20]">
                PayID
              </Text>

              <View className="pt-[0.1rem] w-[2rem] h-[1rem] flex justify-center items-center">
                <CopySVG onPress={handleCopyPayID} />
              </View>

            </View>
            <Text className="pt-[0.1rem] text-[1.2rem] text-[#1E1E1E] font-[BASKiT]">{ payID }</Text>
            <Text className="pt-[0.5rem] text-[1rem] text-[#1E1E1E] font-[BASKiT]">Osko payments are usually instant</Text>
          </View>
        </View>

        <View className="w-full flex justify-center items-center">
          <View className="flex gap-[0.5rem]">
            <View className="">
              <View className="flex flex-row justify-between pb-[0.5rem] mb-[0.5rem] border-b-[1px] border-[#F3F3F1]">
                <Text className="font-[BASKiT-medium] text-[1.3rem] tracking-[0.1rem] text-[#231F20]">
                    Bank Transfer
                </Text>
                <CopySVG onPress={() => handleCopyAccountInfo('all')}/>
              </View>
            </View>

            <View className="w-full flex flex-col gap-[1rem] justify-between ">
              <View className="w-full">
                <TouchableOpacity onPress={() => handleCopyAccountInfo('name')} 
                className="w-full flex flex-row justify-between">
                  <Text className="text-[1.2rem] text-[#1E1E1E] font-[BASKiT]">
                    Account Name
                  </Text>
                  <Text className=" font-[BASKiT-Light] text-[1.1rem] text-[#1E1E1E]">{ accountName }</Text>
                </TouchableOpacity>
              </View>
              <View className="w-full">
                <TouchableOpacity onPress={() => handleCopyAccountInfo('bsb')}
                  className="w-full flex flex-row justify-between"
                  >
                  <Text className="text-[1.2rem] text-[#1E1E1E] font-[BASKiT]">
                    BSB
                  </Text>

                  <Text className=" font-[BASKiT-Light] text-[1.1rem] text-[#1E1E1E]">{ BSB }</Text>  
                </TouchableOpacity>
              </View>
              <View className="w-full">
                <TouchableOpacity onPress={() => handleCopyAccountInfo('account')}
                  className="w-full flex flex-row justify-between"
                  >
                  <Text className="text-[1.2rem] text-[#1E1E1E] font-[BASKiT]">
                    Account Number
                  </Text>

                  <Text className="font-[BASKiT-Light] text-[1.1rem] text-[#1E1E1E]">{ accountNo }</Text>
                  
                </TouchableOpacity>
              </View>
            </View>
            <Text className="font-[BASKiT-Light] pt-[1rem] text-[1rem] text-[#1E1E1E]">Tap your BSB or Account Number to copy them. Bank transfers usually take 2 - 3 days</Text>
          </View>
        </View>

      </View>

      {showToast && (
        <Animated.View
          className="absolute bottom-[10%] left-0 right-0 items-center"
          style={{
            opacity: toastAnim,
            transform: [
              {
                translateY: toastAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0], // slide up smoothly
                }),
              },
            ],
          }}
        >
          <View className="bg-[#E5EF68] px-6 py-3 rounded-full shadow-md">
            <Text className="text-[#1E1E1E] text-base font-medium">{toastMessage}</Text>
          </View>
        </Animated.View>

      )}


    </View>
  );
}