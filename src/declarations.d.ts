// src/declarations.d.ts



declare module '*.module.scss' {
    const content: { [className: string]: string };
    export default content;
  }
  
  declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
  }
  
  declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
  }
  