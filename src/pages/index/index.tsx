import type { FC } from 'react';
import { View } from "@tarojs/components";
import { useApp } from "taro-hooks";

type IndexPageProps = {};

const IndexPage: FC<IndexPageProps> = () => {
  const { globalData } = useApp(true);

  console.log(globalData);

  return (
    <View>
      Index page
    </View>
  )
}

export default IndexPage;
