import React, { useState, useContext } from 'react';
import { SearchBar } from 'react-native-elements';
import { View } from 'react-native';
import ModalAnime from './ModalAnime';
import Provider from './SearchProvider'
import { AnimeContext } from '../API/context';
import AnimeList from './AnimeList'
import { ScrollView, Dimensions } from 'react-native';

export default function Category() {

  const { darkTheme } = useContext(AnimeContext);
  const screen = Dimensions.get("screen");
  const [Data, setData] = useState([])
  const [userInput, setUserInput] = useState()
  const [Visible, setVisible] = useState(false)
  const [Target, setTarget] = useState()
  const [SearchValue, setSearchValue] = useState()

  //const categoriesList = ['1', '27', '36', '6', '7', '24', '4', '30', '21'];

  const categoriesList = ['1', '27', '24', '21']  // The app does not show more than 2 category lists at the same time for some reason...

  // mal_id -> category         -> count
  // 1      -> Action           -> 4443
  // 2      -> Adventure        -> 3682
  // 5      -> Avant Garde      -> 660
  // 46     -> Award Winning    -> 175
  // 28     -> Boys Love        -> 163
  // 4      -> Comedy           -> 6888
  // 8      -> Drama            -> 2790
  // 10     -> Fantasy          -> 4895
  // 26     -> Girls Love       -> 108
  // 47     -> Gourmet          -> 124
  // 14     -> Horror           -> 509
  // 7      -> Mystery          -> 798
  // 22     -> Romance          -> 1998
  // 24     -> Sci-Fi           -> 2929
  // 36     -> Slice of Life    -> 1873
  // 30     -> Sports           -> 724
  // 37     -> Supernatural     -> 1529
  // 41     -> Suspense         -> 200
  // 9      -> Ecchi            -> 791
  // 49     -> Erotica          -> 44
  // 12     -> Hentai           -> 1460
  // 50     -> Adult Cast       -> 379
  // 51     -> Anthropomorphic  -> 707
  // 52     -> CGDCT            -> 187
  // 53     -> Childcare        -> 55
  // 54     -> Combat Sports    -> 87
  // 81     -> Crossdressing    -> 34
  // 55     -> Delinquents      -> 45
  // 39     -> Detective        -> 263
  // 56     -> Educational      -> 234
  // 57     -> Gag Humor        -> 218
  // 58     -> Gore             -> 141
  // 35     -> Harem            -> 403
  // 59     -> High Stakes Game -> 36
  // 13     -> Historical       -> 1409
  // 60     -> Idols (Female)   -> 256
  // 61     -> Idols (Male)     -> 122
  // 62     -> Isekai           -> 263
  // 63     -> Iyashikei        -> 182
  // 64     -> Love Polygon     -> 74
  // 65     -> Magical Sex Shift-> 26
  // 66     -> Maho Shoujo      -> 237
  // 17     -> Martial Arts     -> 531
  // 18     -> Mecha            -> 1285
  // 67     -> Medical          -> 36
  // 38     -> Military         -> 664
  // 19     -> Music            -> 2995
  // 6      -> Mythology        -> 590
  // 68     -> Organized Crime  -> 64
  // 69     -> Otaku Culture    -> 68
  // 20     -> Parody           -> 715
  // 70     -> Performing Arts  -> 88
  // 71     -> Pets             -> 84
  // 40     -> Psychological    -> 398
  // 3      -> Racing           -> 176
  // 72     -> Reincarnation    -> 97
  // 73     -> Reverse Harem    -> 63
  // 74     -> Romantic Subtext -> 44
  // 21     -> Samurai          -> 215
  // 23     -> School           -> 1864
  // 75     -> Showbiz          -> 28
  // 29     -> Space            -> 533
  // 11     -> Strategy Game    -> 311
  // 31     -> Super Power      -> 623
  // 76     -> Survival         -> 62
  // 77     -> Team Sports      -> 292
  // 78     -> Time Travel      -> 119
  // 32     -> Vampire          -> 148
  // 79     -> Video Game       -> 128
  // 80     -> Visual Arts      -> 80
  // 48     -> Workplace        -> 143
  // 43     -> Josei            -> 103
  // 15     -> Kids             -> 5629
  // 42     -> Seinen           -> 887
  // 25     -> Shoujo           -> 681
  // 27     -> Shounnen         -> 2026

  return (
    <ScrollView style={{ backgroundColor: darkTheme ? "#282C35" : "white" }} >

      <View style={{
        backgroundColor: darkTheme ? '#282C35' : 'white',
        width: screen.width,
      }}>

        <SearchBar
          returnKeyType='search'
          placeholder='Enter an anime name...'
          multiline={false}
          searchIcon={{ size: 25 }}
          inputStyle={{
            backgroundColor: darkTheme ? '#282C35' : '#f2f2f2',
            borderRadius: 15
          }}
          inputContainerStyle={{
            backgroundColor: darkTheme ? '#282C35' : '#f2f2f2',
            borderRadius: 15
          }}
          leftIconContainerStyle={{
            backgroundColor: darkTheme ? '#282C35' : '#f2f2f2',
            borderRadius: 15
          }}
          containerStyle={{
            backgroundColor: darkTheme ? '#212121' : 'white',
            borderWidth: 0,
            shadowColor: 'white',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent'
          }}
          onChangeText={(value) => setUserInput(value)}
          value={userInput}
          onSubmitEditing={() => setSearchValue(userInput)}
          onClear={() => setSearchValue(null)}
        />
      </View>
      {
        !SearchValue ?
          categoriesList.map(categoryId => (
            <View key={categoryId}>

              <AnimeList
                id={categoryId}
                setTarget={setTarget}
                setVisible={setVisible}
              />
            </View>

          ))

          :
          <Provider
            Data={Data}
            setData={setData}
            SearchValue={SearchValue}
            setTarget={setTarget}
            setVisible={setVisible} />
      }
      {
        Target ?
          <ModalAnime
            Visible={Visible}
            setVisible={setVisible}
            Target={Target}
          />
          :
          <View style={{ backgroundColor: '#f2f2f2' }}>
          </View>
      }
    </ScrollView>
  );
}


