import { ActivityIndicator } from "react-native";

import styled from "styled-components/native";

export const LoadingView = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const ScreenText = styled.Text`
    margin-top:12px;
    font-size:16px;
    font-weight:700;
`;

const ScreenLoader = () => {
    return (
        <LoadingView >
            <ActivityIndicator size='large' />
            <ScreenText>Loading...</ScreenText>
        </LoadingView>
    );
}

export default ScreenLoader;