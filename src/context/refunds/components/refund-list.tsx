import { Text } from "../../../components/text";
import ForkKnife from "../../../assets/icons/ForkKnife.svg?react";
import { IconBadge } from "../../../components/icon-badge";

export function RefundList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <IconBadge icon={ForkKnife} />
          <div className="flex flex-col">
            <Text variant="label-bold">Rodrigo</Text>
            <Text className="text-xs">Alimentação</Text>
          </div>
        </div>
        <Text>
          R$ <span className="font-semibold text-gray-100">34,78</span>
        </Text>
      </div>
    </div>
  );
}
