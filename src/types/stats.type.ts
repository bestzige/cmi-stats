import { getStats } from "@/server/actions/get-stats.action";
import { inferServerActionReturnData } from "zsa";

export type Stats = inferServerActionReturnData<typeof getStats>;
