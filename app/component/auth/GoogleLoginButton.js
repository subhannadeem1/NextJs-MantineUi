import { Button } from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";

const GoogleLoginButton = ({ onClick }) => {
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
      }}
      onClick={onClick}
    >
      <IconBrandGoogle style={{ marginRight: 10 }} />
      Google
    </Button>
  );
};

export default GoogleLoginButton;
