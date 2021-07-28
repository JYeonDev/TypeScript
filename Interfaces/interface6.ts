interface Iperson2 {
  name: string;
  age?: number;
}

interface IKorean extends Iperson2 {
  city: string;
}

const k: IKorean = {
  name: "김종연",
  city: "서울"
}