export interface Social {
  github?: string;
  email?: string;
}

export interface Copyrights {
  desc?: string;
  url?:string;
}

export interface Anchor {
  id: string;
  icon: string;
  name: string;
}

export interface Banner {
  anchor: Anchor
}

export interface Header {
  title: string;
  subtitle?: string;
}

export interface Module {
  display: boolean;
  anchor: Anchor;
  header: Header;
  content?: object;
  keys?: object;
  cards?: any;
}

export interface TCollection {
  title: string,
  loading: string,
  fork: string,
}


export interface UserInfo {
  TCollection: TCollection;
  social: Social;
  copyrights: Copyrights;
  banner: Banner;
  modules: Module[];
}
