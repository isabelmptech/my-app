import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from '../components/Header';
import ButtonIcon from '../components/ButtonIcon';
import Title from '../components/Title';

export default function Profile() {
    const navigation = useNavigation();
        return (
            <View style={{
                flex:1,
                padding: 32,
                paddingTop: 54
            }}>
                <Header>
                        <Title>Perfil</Title>
                </Header>

            </View>
        )
}