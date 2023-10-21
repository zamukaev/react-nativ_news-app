import { useEffect, useState } from "react";
import ScreenLoader from "../ScreenLoader/ScreenLoader";
import axios from "axios";

import styled from "styled-components/native";

export interface Data {
    id: string;
    title: string;
    imageUrl: string;
    text: string;
    createdAt: number;
}

export const ViewContainer = styled.View`
    flex:1;
    padding:10px;
    margin-top:10px;
`;
export const FullScreenImage = styled.Image`
    height:270px;
    width:100%;
    border-radius:10px
`;

export const FullScreenText = styled.Text`
    font-size:16px;
    line-height:24px;
    margin-top:15px;
    
`;
const FullScreen = ({ route, navigation }: any) => {
    const { id, title } = route.params;
    const [data, setData] = useState<Data>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setIsLoading(true)
        navigation.setOptions({
            title
        });
        const response = await axios.get<Data>(`https://6487143abeba6297278fde11.mockapi.io/news/${id}`);
        setData(response.data);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <ScreenLoader />
    }
    return (
        <ViewContainer >
            <FullScreenImage source={{ uri: data?.imageUrl }} />
            <FullScreenText>
                {data?.text}
            </FullScreenText>
        </ViewContainer>
    );
}

export default FullScreen;