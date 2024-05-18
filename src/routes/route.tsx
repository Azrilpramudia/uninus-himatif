import { indexRoute } from "./home/default";
import { rootRoute } from "./template";

export const routeTree = rootRoute.addChildren([indexRoute]);
