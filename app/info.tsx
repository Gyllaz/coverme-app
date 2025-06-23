import { Text, View, Share, Alert, Animated, Easing } from "react-native";
import { useState, useRef, useEffect } from "react";
import { BackArrow, ShareSVG, CopySVG, CopyOptionsModal } from '../components';
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

  const handleCopyAccountInfo = async (type: 'bsb' | 'account' | 'both') => {
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
      if (type === 'both') {
        valueToCopy = `BSB: ${BSB}\nAccount No: ${accountNo}`;
        message = 'BSB & Account number copied';
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

  const showCopyToast = (message: string) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setToastMessage(message);
    setShowToast(true);
    Animated.timing(toastAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      setTimeout(() => {
        Animated.timing(toastAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.in(Easing.ease),
        }).start(() => setShowToast(false));
      }, 1200);
    });
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
      className="bg-white h-full flex gap-[0.1rem]"
    >
      <BackArrow />
      
      <View className="flex flex-row pt-[2.5rem] gap-[1.5rem] w-full justify-center items-center">
        <Text className="text-[#5050c2] font-poppins text-[2rem] font-medium">Account Information</Text>
        <View className="pb-[0.5rem]">
          <ShareSVG onPress={handleShare}/>
        </View>
      </View>

      <View className="flex gap-[2rem] pt-[2.5rem]">
        <View className=" w-full flex justify-center items-center">
          <View className="bg-[#5050C2] w-[90%] border-[3px] border-[#5050c2] flex gap-[1rem] py-[2rem] px-[2rem] rounded-[15px]">
            <View className="flex flex-row justify-between">
              <Text className="font-poppins text-[1.7rem] tracking-[0.1rem] text-white font-medium">
                PayID
              </Text>

              <View className="pt-[0.1rem]">
                <CopySVG onPress={handleCopyPayID} />
              </View>

            </View>
            <Text className="pt-[0.1rem] font-poppins text-[1.3rem] text-white font-me">{ payID }</Text>
            <Text className="pt-[0.5rem] font-poppins text-[1rem] text-white font-me font-light">Osko payments are usually instant</Text>
          </View>
        </View>

        <View className="w-full flex justify-center items-center">
          <View className=" bg-[#5050c2] w-[90%] border-[3px] border-[#5050c2] flex gap-[1rem] py-[2rem] px-[2rem] rounded-[15px]">
            <View className="">
              <View className="flex flex-row justify-between">
                <View>
                  <Text className="font-poppins text-[1.7rem] text-white font-medium">
                    Account Name
                  </Text>
                  <Text className="pt-[1rem] font-poppins text-[1.3rem] text-white font-me">{ accountName }</Text>
                </View>
                <CopySVG onPress={() => setShowModal(true)}/>

              </View>
            </View>

            <View className="w-full flex flex-row justify-between pt-[1.5rem] ">
              <View>
                <Text className="font-poppins text-[1.7rem] text-white font-medium">
                  BSB
                </Text>
                <Text className="pt-[1rem] font-poppins text-[1.3rem] text-white font-me">{ BSB }</Text>
              </View>
              <View>
                <Text className="font-poppins text-[1.7rem] text-white font-medium">
                  Account Number
                </Text>
                <Text className="pt-[1rem] font-poppins text-[1.3rem] text-white font-me">{ accountNo }</Text>
              </View>
            </View>
            <Text className="pt-[1rem] font-poppins text-[1rem] text-white font-me font-light">Bank transfers usually take 2 - 3 days</Text>
          </View>
        </View>

      </View>

      {showToast && (
        <Animated.View
          className="absolute bottom-[3rem] left-0 right-0 items-center"
          style={{
            opacity: toastAnim,
            transform: [
              {
                translateY: toastAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          }}
        >
          <View className="bg-[#5050c2] px-6 py-3 rounded-full shadow-md">
            <Text className="text-white text-base font-medium">{toastMessage}</Text>
          </View>
        </Animated.View>
      )}


      <CopyOptionsModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSelect={handleCopyAccountInfo}
      />

    </View>
  );
}