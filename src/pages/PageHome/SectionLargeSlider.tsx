import CardLarge1 from "components/CardLarge1/CardLarge1";
import LoadingScreen from "components/LoadingScreen";
import ServerError from "components/ServerError";
import { useCrud } from "hooks/useCrud";
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export interface SectionLargeSliderProps {
  className?: string;
}

const SectionLargeSlider: FC<SectionLargeSliderProps> = ({
  className = "",
}) => {
  const { fetch, data, loading, errors } = useCrud("/latest-nfts");
  const [indexActive, setIndexActive] = useState(0);

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= 2) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return 2;
      }
      return state - 1;
    });
  };

  return (
    <div className={`nc-SectionLargeSlider relative ${className}`}>
      {data.map((nft: Nft, index: number) =>
        indexActive === index ? (
          <CardLarge1
            key={index}
            nft={nft}
            onClickNext={handleClickNext}
            onClickPrev={handleClickPrev}
          />
        ) : null
      )}
    </div>
  );
};

export default SectionLargeSlider;
