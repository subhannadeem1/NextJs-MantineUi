import { Button } from "@mantine/core";
import { IconBrandGoogle, IconBrandApple  } from "@tabler/icons-react";

const GoogleLoginButton = ({ onClick }) => {
  return (
    <>
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
  </>
  );
};

export default GoogleLoginButton;
