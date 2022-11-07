import React, { useState, useEffect, useContext } from 'react'
import { Image, ActivityIndicator, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { AnimeContext } from '../API/context';
import Carousel from "react-native-snap-carousel";

const windowWidth = Dimensions.get("window").width;
const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

const AnimeList = ({ id, setTarget, setVisible }) => {

    const genreNames = {1: "Action", 27: "Shounnen", 24: "Sci-fi"};

    const { fetchAnimeCategories, darkTheme, setError } = useContext(AnimeContext);
    const [Loading, setLoading] = useState(true)
    const [GenreName, setGenreName] = useState('')
    const [GenreList, setGenreList] = useState([])

    useEffect(
        () => {
            fetchAnimeCategories(id).then(data => {
                if(id){
                    console.log(id);
                }
                
                setGenreList(data.data);

                setGenreName(genreNames[id]);

                setLoading(false);
            }).catch(e => setError(e))
        }, [id]
    )
    
    console.log(GenreName);

    return (
        <View style={{ backgroundColor: darkTheme ? '#282C35' : '#f2f2f2', marginTop: 20 }} horizontal key={id}>
            <Text style={{
                fontSize: 20,
                color: darkTheme ? '#E4FBFF' : 'black',
                fontWeight: 'bold',
                textAlign: 'left',
                padding: 10
            }}>{GenreName}</Text>
            {
                Loading ? <ActivityIndicator size='large' color='#7868E6' /> : (
                    <Carousel
                        layout={"default"}
                        data={GenreList}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    setTarget(item)
                                    setVisible(true)
                                }}
                                    key={index}>
                                    <Image source={{ uri: item.images.jpg.image_url }} style={{
                                        height: 100,
                                        width: 100,
                                        margin: 10
                                    }} />
                                    <Text numberOfLines={2}
                                        style={{ color: darkTheme ? '#fff' : 'black', maxWidth: 100, textAlign: 'center' }}>{item.title}</Text>
                                </TouchableOpacity>
                            );
                        }}
                        sliderWidth={windowWidth}
                        itemWidth={SLIDE_WIDTH}
                        activeSlideAlignment={"start"}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                    />
                )
            }
        </View>
    );
}

export default AnimeList;