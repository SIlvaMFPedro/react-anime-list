import React, {  useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Home from "./Home";
import Category from "./Category";
import TopNavigation from "./TopNavigation";
import { AnimeContext } from "../API/context";

export default function Tabs() {
  const layout = useWindowDimensions();

  const { index, setIndex } = useContext(AnimeContext);

  const [routes] = useState([
    { key: "first", title: "Categories" },
    { key: "second", title: "Home" },
  ]);

  const renderScene = SceneMap({
    first: Category,
    second: Home,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
}