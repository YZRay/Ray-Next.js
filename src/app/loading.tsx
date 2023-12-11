import { Spinner } from "@nextui-org/react";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Spinner
        size="lg"
        label="Loading..."
        color="warning"
        labelColor="warning"
      />
    </div>
  );
};

export default loading;
