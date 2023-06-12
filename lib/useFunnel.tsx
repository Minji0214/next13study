"use client";
import React, { useState, ReactNode } from "react";

type StepProps = {
  name: string;
  children: ReactNode;
};

type ChildrenType = {
  children: ReactNode[];
};

export default function useFunnel() {
  const [step, setStep] = useState<string | undefined>();
  const Step = (props: StepProps) => {
    return <>{props.children}</>;
  };
  const Funnel = ({ children }: ChildrenType) => {
    const targetStep = children.find(
      (childStep) => (childStep as ReactElement<StepProps>).props.name === step
    );
    return Object.assign(targetStep, { Step });
  };
  return [Funnel, setStep] as const;
}
