import classNames from "classnames";
import React, { ReactNode } from "react";

export const CDivider = () => {
  return (
    <div className="h-0.5 mt-2 mb-4 rounded-3xl bg-[linear-gradient(to_right,#123541,#9E9E9E91,transparent)] w-[85%]"></div>
  );
};

interface ITitleProps {
  label: string;
  image?: string;
}

export const CTitle = ({ label = "", image }: ITitleProps) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      {image && <img src={image} alt="" className="max-w-16 max-h-[100px]" />}
      <h5 className="font-semibold text-xl">{label}</h5>
    </div>
  );
};

export const CSubtitle = ({ label = "", image }: ITitleProps) => {
  return (
    <div className="flex flex-row items-center gap-3">
      {image && <img src={image} alt="" className="max-w-10" />}
      <h5 className="font-medium text-lg">{label}</h5>
    </div>
  );
};

export const CMinititle = ({ label = "", image }: ITitleProps) => {
  return (
    <div className="flex flex-row items-center gap-3">
      {image && <img src={image} alt="" className="max-w-8" />}
      <h5 className="font-medium text-base">{label}</h5>
    </div>
  );
};
interface IIngredient {
  quantity: number;
  image: string;
  name: string;
  subs?: { name: string; image: string }[];
}

export const CRecipe = ({
  ingredients = [],
  customTitle,
  className,
}: {
  ingredients: IIngredient[];
  customTitle?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("flex flex-row items-start gap-5", className)}>
      {customTitle ? (
        customTitle
      ) : (
        <p className="px-4 mb-1 font-medium flex flex-row items-center gap-1.5">
          <img src="/recipe.png" alt="" className="max-w-8" />
          Recipe:
        </p>
      )}
      <ul className="text-sm font-medium text-heading bg-neutral-primary-soft border border-default rounded-base">
        {ingredients.map((ingredient) =>
          Boolean(ingredient.subs) ? (
            <li
              key={ingredient.name}
              className="w-full border-b border-default"
            >
              <div className="flex flex-row items-center gap-3 px-4 py-2 ">
                <img src={ingredient.image} alt="" className="max-w-10" />
                <span className="font-bold shrink-0 w-8 text-center">
                  {ingredient.quantity}x
                </span>
                <span>{ingredient.name}</span>
              </div>
              {ingredient.subs?.map((sub) => (
                <React.Fragment key={ingredient.name}>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <span className="w-[25%] h-0.5 bg-gray-200"></span>
                    <span>Or</span>
                    <span className="w-[25%] h-0.5 bg-gray-200"></span>
                  </div>
                  <div
                    key={sub.name}
                    className="flex flex-row items-center gap-3 px-4 py-2 "
                  >
                    <img src={sub.image} alt="" className="max-w-10" />
                    <span className="font-bold shrink-0 w-8 text-center">
                      {ingredient.quantity}x
                    </span>
                    <span>{sub.name}</span>
                  </div>
                </React.Fragment>
              ))}
            </li>
          ) : (
            <li
              key={ingredient.name}
              className="w-full
            flex flex-row items-center gap-3 px-4 py-2 border-b border-default"
            >
              <img src={ingredient.image} alt="" className="max-w-10" />
              <span className="font-bold shrink-0 w-8 text-center">
                {ingredient.quantity}x
              </span>
              <span>{ingredient.name}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

interface IConsumptionRecoveryProps {
  health: number;
  hunger: number;
  sanity: number;
}

export const CConsumptionRecovery = ({
  health,
  hunger,
  sanity,
}: IConsumptionRecoveryProps) => {
  return (
    <div className="flex flex-row gap-5 items-center px-2">
      <div className="flex flex-col items-center">
        <img
          src="https://static.wikia.nocookie.net/dont-starve-game/images/4/48/Hunger_Meter.png"
          alt=""
          className="max-w-7"
        />
        <span className="font-medium">{hunger}</span>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://static.wikia.nocookie.net/dont-starve-game/images/2/2f/Sanity_Meter.png"
          alt=""
          className="max-w-7"
        />
        <span className="font-medium">{sanity}</span>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://static.wikia.nocookie.net/dont-starve-game/images/f/f3/HealthMeter.png"
          alt=""
          className="max-w-7"
        />
        <span className="font-medium">{health}</span>
      </div>
    </div>
  );
};

export const CList = ({
  list = [],
  className,
}: {
  list: string[];
  className?: string;
}) => {
  return (
    <ul
      className={classNames(
        "list-disc text-gray-800 pl-6 marker:text-xl leading-9",
        className
      )}
    >
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
