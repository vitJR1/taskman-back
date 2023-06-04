import om from "omyumyum";

export const arrayOfNum = om.array.of(om.number).and.custom(v=>v.length>0)
