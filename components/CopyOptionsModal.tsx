import { View, Text, TouchableOpacity, Modal } from 'react-native';

export default function CopyOptionsModal({ visible, onClose, onSelect }: {
  visible: boolean;
  onClose: () => void;
  onSelect: (option: 'bsb' | 'account' | 'both') => void;
}) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end items-center bg-black/50">
        <View className="bg-white w-[50%] mb-[2rem] rounded-2xl pt-[1rem]">
          <Text className="text-center text-[#5050c2] text-xl font-semibold mb-4">Copy Account Info</Text>
          <View className='flex'>
            <TouchableOpacity onPress={() => onSelect('bsb')} className="py-3 w-full bg-[#5050c2]">
              <Text className="pl-[25%] text-lg text-white">BSB</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onSelect('account')} className="py-3 bg-[#5050c2]">
              <Text className="pl-[25%] text-lg text-white">Account Number</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onSelect('both')} className="py-3 bg-[#5050c2] rounded-b-2xl">
              <Text className="pl-[25%] text-lg text-white">Both</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </Modal>
  );
}
