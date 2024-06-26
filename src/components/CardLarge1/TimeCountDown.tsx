import useCountDownTime from "hooks/useCountDownTime";
import React from "react";
import { useTranslation } from "react-i18next";

interface props {
  sale_end_at: Date;
}

const TimeCountDown: React.FC<props> = ({ sale_end_at }) => {
  const { t } = useTranslation();
  const timeLeft = useCountDownTime(sale_end_at);

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 space-x-2 text-neutral-500 dark:text-neutral-400">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8V13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 2H15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mt-1 leading-none">{t("Sale_end_in")}:</span>
      </div>
      <div className="flex gap-5 space-x-5 text-center sm:space-x-10">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-semibold sm:text-3xl">
            {timeLeft.days}
          </span>
          <span className="sm:text-lg text-neutral-500 dark:text-neutral-400">
            {t("Days")}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-semibold sm:text-3xl">
            {timeLeft.hours}
          </span>
          <span className="sm:text-lg text-neutral-500 dark:text-neutral-400">
            {t("Hours")}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-semibold sm:text-3xl">
            {timeLeft.minutes}
          </span>
          <span className="sm:text-lg text-neutral-500 dark:text-neutral-400">
            {t("Minutes")}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-semibold sm:text-3xl">
            {timeLeft.seconds}
          </span>
          <span className="sm:text-lg text-neutral-500 dark:text-neutral-400">{t("Seconds")}</span>
        </div>
      </div>
    </div>
  );
};

export default TimeCountDown;
