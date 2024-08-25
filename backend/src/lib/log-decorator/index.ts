function log<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  console.log("target", target);
  console.log("context", context);

  return function (this: This, ...args: Args): Return {
    if (context.kind === "method")
      console.log(`Running method ${String(context.name)}`);
    const result = target.call(this, ...args);
    return result;
  };
}

export { log };
