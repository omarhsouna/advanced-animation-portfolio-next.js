import TechIcon from "@/components/TechIcon";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];

  className?: string;
  itemsWrapperClassName?: string;
}
const ToolboxItems = ({ items, className, itemsWrapperClassName }: Props) => {
  return (
    <div
      className={twMerge(
        "flex  [mask-image:linear-gradient(to_bottom,transparent,black_10%, black_70%, transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon Component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
