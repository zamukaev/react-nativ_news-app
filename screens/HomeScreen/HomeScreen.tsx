import { useEffect, useState } from "react";
import { FlatList, RefreshControl, TouchableOpacity } from "react-native";
import { Post } from "../../components/Post/Post";
import ScreenLoader from "../ScreenLoader/ScreenLoader";
import { StatusBar } from "expo-status-bar";

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
    margin-top:20px;
`
const HomeScreen: React.FC<any> = ({ navigation }) => {
    const [data, setData] = useState<Data[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setIsLoading(true)
        const response = await axios.get<Data[]>('https://6487143abeba6297278fde11.mockapi.io/news');
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
            <StatusBar />
            <FlatList data={data} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation?.navigate('Details', { id: item.id, title: item.title })}>
                    <Post
                        id={item.id}
                        title={item.title}
                        text={item.text}
                        imageUrl={item.imageUrl}
                        createdAt={item.createdAt}
                    />
                </TouchableOpacity>
            )
            }
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={fetchData} />
                }
            />
        </ViewContainer>
    );
}

export default HomeScreen;