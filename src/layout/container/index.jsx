export const Container = (props) => {
  const Component = props.Component || "div";
  return (
    <Component
      className="flex justify-center items-center flex-col"
      {...props}
    />
  );
};
