import { Button } from "@mantine/core";
import { IconBrandApple } from "@tabler/icons-react";

const AppleLoginButton = ({ onClick }) => {
  return (
    <Button
      variant="default"
      color="gray"
      style={{
        width: 200,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
      onClick={onClick}
    >
      <IconBrandApple style={{ marginRight: 10 }} />
      Apple ID
    </Button>
  );
};

export default AppleLoginButton;
