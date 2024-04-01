import Title, { TitleProps } from "antd/es/typography/Title";

interface ContainerContentProps<T extends {} = {}> {
  children: React.ReactNode;
  title: string | undefined;
  propsTitle?: React.ComponentType<T>;
  titleProps?: T;
}

const ContainerContent: React.FC<ContainerContentProps<TitleProps>> = ({
  title,
  children,
  propsTitle: TitleComponent = Title,
  titleProps,
}) => {
  return (
    <>
      <TitleComponent {...titleProps}>{title}</TitleComponent>
      {children}
    </>
  );
};

export default ContainerContent;
