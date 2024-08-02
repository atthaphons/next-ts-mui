import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

type Props = { actionAdd: () => void };

export default function MaintainActionButton({ actionAdd }: Readonly<Props>) {
  const { t } = useTranslation();
  return (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      color="primary"
      onClick={actionAdd}
    >
      {t("addButton")}
    </Button>
  );
}
