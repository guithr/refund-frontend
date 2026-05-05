import ForkKnifeIcon from "../../assets/icons/ForkKnife.svg?react";
import BedIcon from "../../assets/icons/Bed.svg?react";
import PoliceCarIcon from "../../assets/icons/PoliceCar.svg?react";
import WrenchIcon from "../../assets/icons/Wrench.svg?react";
import ReceiptIcon from "../../assets/icons/Receipt.svg?react";

export const categoryIcons = {
  food: {
    icon: ForkKnifeIcon,
    label: "Alimentação",
  },
  hosting: {
    icon: BedIcon,
    label: "Hospedagem",
  },
  transport: {
    icon: PoliceCarIcon,
    label: "Transporte",
  },
  services: {
    icon: WrenchIcon,
    label: "Serviços",
  },
  other: {
    icon: ReceiptIcon,
    label: "Outros",
  },
};

export const categoryOptions = Object.entries(categoryIcons).map(
  ([key, value]) => ({
    label: value.label,
    value: key,
  }),
);
