interface Bird {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}





interface Dog extends Bird {
  race: string;
  age: number;

  type race = "husky" | "labrador" | "chucho";
}



