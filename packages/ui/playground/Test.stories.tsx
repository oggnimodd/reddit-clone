import type { Story } from "@ladle/react";
import { Button, Avatar, Progress } from "@nextui-org/react";
import React from "react";
import {
  Meter as ReactAriaMeter,
  Label as ReactAriaLabel,
} from "react-aria-components";
import type { MeterProps as ReactAriaMeterProps } from "react-aria-components";

export const Test: Story = () => {
  return (
    <Button className="dark:mt-3" color="primary">
      Test
    </Button>
  );
};

export const Card = () => {
  return (
    <div className="flex flex-col gap-y-4 bg-primary-50 dark:bg-default-50 p-5 rounded-medium">
      <div className="flex items-center gap-x-3">
        <Avatar
          isBordered
          size="lg"
          src="https://nextui.org/_next/image?url=%2Favatars%2Favatar-1.webp&w=48&q=75"
        />
        <div className="flex flex-col">
          <p className="font-bold">Zoey Lang</p>
          <p className="text-default-500 dark:text-default-400">@zoeylang</p>
        </div>
        <Button color="primary" className="ml-auto" size="md">
          Follow
        </Button>
      </div>
      <p className="text-default-500 dark:text-default-400">
        Full-stack developer, @getnextui lover she/her 🎉
      </p>
      <div className="flex gap-x-2 text-sm">
        <p className="flex gap-x-1 text-default-500 dark:text-default-400">
          <span className="font-bold text-default-600 dark:text-default-500">
            4
          </span>
          Following
        </p>
        <p className="flex gap-x-1 text-default-500 dark:text-default-400">
          <span className="font-bold text-default-600 dark:text-default-500">
            97.1K
          </span>
          Followers
        </p>
      </div>
    </div>
  );
};

export const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

interface MeterProps extends ReactAriaMeterProps {
  label?: string;
}

const Meter: React.FC<MeterProps> = ({ label = "Default Label", ...props }) => {
  return (
    <ReactAriaMeter {...props} className="flex flex-col">
      {({ percentage: _percentage, valueText }) => {
        let percentage = _percentage;

        if (percentage > 100) {
          percentage = 100;
        } else if (percentage < 0) {
          percentage = 0;
        }

        return (
          <>
            <div className="flex justify-between text-sm mb-2 dark:text-default-600 text-default-700">
              <ReactAriaLabel>{label}</ReactAriaLabel>
              <span className="value">{valueText}</span>
            </div>
            <div className="w-full h-1 dark:bg-default-300/50 bg-default-200 rounded-full">
              <div
                className="h-full bg-primary-500 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </>
        );
      }}
    </ReactAriaMeter>
  );
};

export const MetersDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      <Meter label="Progress" value={43} />
      <Meter label="Yyeyeyyeye" value={900} />
      <Meter label="Yyeyeyyeye" value={-10} />
      <Progress
        size="md"
        radius="sm"
        color="danger"
        label="Destruction progress"
        value={56}
        showValueLabel
      />
      <div className="grid grid-cols-2 gap-x-20">
        <Progress
          size="sm"
          radius="sm"
          color="danger"
          label="Destruction progress"
          value={56}
          showValueLabel
        />
        <Meter label="Yyeyeyyeye" value={900} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
