declare module '*.scss' {
  const content: { readonly [key: string]: string };
  export default content;
}

declare module '*.sass' {
  const content: { readonly [key: string]: string };
  export default content;
}
