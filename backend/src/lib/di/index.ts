const Container: { [key: string]: any } = {};

function Init(target: any, context: ClassDecoratorContext) {
  console.log("target", target);
  console.log("context", context);
  const instanceName = String(context.name);
  Container[instanceName] = new target();
}

export { Init, Container };
