import { useCallback, useEffect, useState } from "react";
import { ResponseDataType } from "../types";

const useFilter = (targetArray: ResponseDataType[]) => {
  const [filtered, setFiltered] = useState<ResponseDataType[]>();

  // useFilterの内部で、引数に渡されたtargetArrayをuseEffectを使って、filteredにセットする
  useEffect(() => {
    setFiltered(targetArray);
  }, [targetArray]);

  // 引数のtextで配列をfilterして、filteredにセットする
  const filter = useCallback(
    (text: string) => {
      setFiltered(
        targetArray.filter(
          ({ title }) => title.toLowerCase().search(text) !== -1
        )
      );
    },
    [targetArray]
  );

  return { filtered, filter };
};

export default useFilter;
