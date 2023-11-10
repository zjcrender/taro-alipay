import type { FC } from "react";
import { View } from "@tarojs/components";

type IndexPageProps = {};

const IndexPage: FC<IndexPageProps> = () => {
  return (
    <>
      <View className="page-wrap">
        <View className="content-wrap">
          <native pv={1} />
        </View>
      </View>
    </>
  );
};

export default IndexPage;
