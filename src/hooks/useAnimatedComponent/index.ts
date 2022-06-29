import { FC, useMemo } from 'react';
import { AnimatedComponentProps } from "../../components/AnimatedComponent/types";
import AnimatedComponent from "../../components/AnimatedComponent";

type UseAnimatedComponent = (props: AnimatedComponentProps) => [
  FC<Partial<AnimatedComponentProps> | undefined>,
  AnimatedComponentProps
];


const useAnimatedComponent: UseAnimatedComponent = (componentProps) => {
  AnimatedComponent.defaultProps = componentProps;

  return useMemo(() => [
    AnimatedComponent as any,
    componentProps
  ],
    [componentProps]
  );
};


export {
  useAnimatedComponent as default
};