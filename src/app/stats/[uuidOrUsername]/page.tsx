"use client";

import StatsHeader from "@/components/stats/stats-header";
import StatsInfo from "@/components/stats/stats-info";
import { useServerActionQuery } from "@/lib/hooks/server-action-hooks";
import { getStats } from "@/server/actions/get-stats.action";

type StatsPageProps = {
  params: {
    uuidOrUsername: string;
  };
};

const StatsPage = ({ params: { uuidOrUsername } }: StatsPageProps) => {
  const { isLoading, data, error } = useServerActionQuery(getStats, {
    input: {
      uuidOrUsername: uuidOrUsername,
    },
    queryKey: ["stats", uuidOrUsername],
  });

  return (
    <div>
      <StatsHeader text='Profile' />
      <StatsInfo stats={data} />
    </div>
  );
};

export default StatsPage;
