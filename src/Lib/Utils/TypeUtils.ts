// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DeepOmit<T, K extends keyof any> = T extends object
    ? {
          [P in Exclude<keyof T, K>]: DeepOmit<T[P], K>;
      }
    : T;
