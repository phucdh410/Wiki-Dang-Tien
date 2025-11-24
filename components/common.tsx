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

interface IIngredient {
  quantity: number;
  image: string;
  name: string;
}

export const CRecipe = ({
  ingredients = [],
}: {
  ingredients: IIngredient[];
}) => {
  return (
    <div className="flex flex-row items-start gap-5">
      <p className="px-4 mb-1 font-medium flex flex-row items-center gap-1.5">
        <img src="/recipe.png" alt="" className="max-w-8" />
        Recipe:
      </p>
      <ul className="text-sm font-medium text-heading bg-neutral-primary-soft border border-default rounded-base">
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.name}
            className="w-full
            flex flex-row items-center gap-3 px-4 py-2 border-b border-default rounded-t-lg"
          >
            <img src={ingredient.image} alt="" className="max-w-10" />
            <span className="font-bold shrink-0 w-8 text-center">
              {ingredient.quantity}x
            </span>
            <span>{ingredient.name}</span>
          </li>
        ))}
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
    <div className="flex flex-row gap-5 items-center">
      <div className="flex flex-row items-center gap-1">
        <span className="text-lg font-medium">{hunger}</span>
        <img
          src="https://static.wikia.nocookie.net/dont-starve-game/images/4/48/Hunger_Meter.png"
          alt=""
          className="max-w-7"
        />
      </div>
      <div className="flex flex-row items-center gap-1">
        <span className="text-lg font-medium">{sanity}</span>
        <img
          src="https://static.wikia.nocookie.net/dont-starve-game/images/2/2f/Sanity_Meter.png"
          alt=""
          className="max-w-7"
        />
      </div>
      <div className="flex flex-row items-center gap-1">
        <span className="text-lg font-medium">{health}</span>
        <img
          src="https://static.wikia.nocookie.net/dont-starve-game/images/f/f3/HealthMeter.png"
          alt=""
          className="max-w-7"
        />
      </div>
    </div>
  );
};
