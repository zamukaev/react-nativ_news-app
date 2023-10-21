import { FC } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
export const PostView = styled.View`
    flex:1;
    flex-direction:row;
    align-items:center;
    padding:15px;
    border-bottom-width:1px;
    border-bottom-color:rgba(0,0,0,0.1);
    border-bottom-style:solid;
`;
export const PostImage = styled.Image`
    width:60px;
    height:60px;
    border-radius:12px;
    margin-right:12px;
`;
export const PostTitle = styled.Text`
    font-size:16px;
    font-weight:700;
`;
export const PostDate = styled.Text`
    font-size:12px;
    color:rgba(0,0,0,0.4);
    margin-top:2px;
`;
export const PostDetails = styled.View`

`;

interface PostProps {
    id: string;
    title: string;
    imageUrl: string;
    text: string;
    createdAt: number;
}

export const Post: FC<PostProps> = ({ id, title, text, imageUrl, createdAt }) => {

    const truncateTitle = (str: string) => {
        if (str.length > 50) {
            return str.substring(0, 50) + '...';
        }
        return str;
    }
    return (
        <PostView key={id}>
            <PostImage source={{ uri: imageUrl }} />
            <View style={{ flex: 1, justifyContent: "center" }}>
                <PostTitle>{truncateTitle(title)}</PostTitle>
                <PostDate>{new Date(createdAt).toDateString()}</PostDate>
            </View>
        </PostView>
    );
}