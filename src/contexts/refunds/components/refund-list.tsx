import { Text } from "../../../components/text";
import { Link } from "react-router";
import { useRefunds } from "../hooks/use.refunds";
import { categoryIcons } from "../helpers";
import { IconBadge } from "../../../components/icon-badge";
import { Skeleton } from "../../../components/skeleton";

export function RefundList() {
  const { refunds, isLoadingRefunds } = useRefunds();

  if (isLoadingRefunds) {
    return <RefundsListSkeleton />;
  }

  if (!refunds || refunds.length === 0) {
    return <RefundsListEmpty />;
  }

  return (
    <ul className="flex flex-col gap-4">
      {refunds.map((refund) => {
        const category =
          categoryIcons[refund.category as keyof typeof categoryIcons];

        return (
          <li key={refund.id}>
            <Link
              to={`/refunds/${refund.id}`}
              className="flex justify-between items-center"
            >
              <div className="flex gap-3 items-center">
                <IconBadge icon={category.icon} />
                <div className="flex flex-col">
                  <Text variant="label-bold">{refund.title}</Text>
                  <Text className="text-xs">{category.label}</Text>
                </div>
              </div>
              <Text>
                R${" "}
                <span className="font-semibold text-gray-100">
                  {refund.value}
                </span>
              </Text>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function RefundsListEmpty() {
  return (
    <div className="flex items-center justify-center p-10 text-sm text-gray-200">
      Nenhuma solicitação encontrada.
    </div>
  );
}

function RefundsListSkeleton() {
  return (
    <ul className="flex flex-col gap-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index} className="flex items-center justify-between py-0.5">
          <div className="flex items-center gap-3">
            <Skeleton className="size-8.5 rounded-full" />
            <div className="flex flex-col gap-1">
              <Skeleton className="h-4.5 w-35" />
              <Skeleton className="h-3.5 w-16" />
            </div>
          </div>
          <Skeleton className="h-5 w-12" />
        </li>
      ))}
    </ul>
  );
}
