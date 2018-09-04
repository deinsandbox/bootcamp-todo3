export interface Value {
  id: number;
  joke: string;
  categories: any[];
}

export interface Joke {
  type: string;
  value: Value;
}
