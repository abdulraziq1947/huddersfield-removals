import { areaContentBatch1 } from "./area-content-batch1";
import { areaContentBatch2 } from "./area-content-batch2";

export interface AreaContent {
  intro: string[];
  housing: string;
  access: string;
  parking: string;
  typicalMoves: string;
  faqs: { q: string; a: string }[];
}

export type AreaContentMap = Record<string, AreaContent>;

export const areaContent: AreaContentMap = {
  ...areaContentBatch1,
  ...areaContentBatch2,
};
