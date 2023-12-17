import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "../../../profile/styles";
import { PlusCircle } from "lucide-react-native";
import { RegularNormal } from "../../../../constants";

type AddEventProps = {
  title: string;
  onPress?: () => void;
};

const AddEvent: React.FC<AddEventProps> = ({
  title,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{flexDirection: "row"}}>
        <View style={{marginRight: 8}}>
            <PlusCircle size={21} color={"#87929D"} />
        </View>
      <RegularNormal>{title}</RegularNormal>
    </View>
  </TouchableOpacity>
);

export default AddEvent;
