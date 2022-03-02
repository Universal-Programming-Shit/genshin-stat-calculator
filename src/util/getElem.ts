import clamp from "./clamp";

export default <A>(arr: A[], i: number): A => arr[clamp(i, 0, arr.length - 1)]
