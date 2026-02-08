export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  smartstoreUrl: string;
}

export const products: Product[] = [
  {
    id: "12895131962",
    name: "말랑 위아래 인덱스형 북마커 책갈피",
    price: 1500,
    image: "https://shop1.phinf.naver.net/20251229_168/1766974487780ih80W_PNG/37481454365834775_539070738.png",
    category: "독서용품",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/12895131962"
  },
  {
    id: "12867462975",
    name: "포그니 B6 A5 다이어리 북 책 파우치",
    price: 16000,
    image: "https://shop1.phinf.naver.net/20251223_130/1766456142817J7yxr_PNG/83599229588541416_572854869.png",
    category: "다이어리",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/12867462975"
  },
  {
    id: "12476457256",
    name: "순수 B6 A5 다이어리커버 북커버",
    price: 16000,
    image: "https://shop-phinf.pstatic.net/20250929_93/17591139126850YvuW_JPEG/93246898800183461_624841658.jpg",
    category: "다이어리",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/12476457256"
  },
  {
    id: "12476421882",
    name: "빈티지플라워샵 B6 A5 다이어리커버",
    price: 16000,
    image: "https://shop1.phinf.naver.net/20250929_281/1759113274726tabgl_JPEG/2427716736448742_1716282849.jpg",
    category: "다이어리",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/12476421882"
  },
  {
    id: "12229700073",
    name: "퐁퐁 이너백 파우치 스트링파우치",
    price: 5000,
    image: "https://shop1.phinf.naver.net/20250810_126/175483147383638dLT_JPEG/80860959072840186_1465207397.jpg",
    category: "파우치",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/12229700073"
  },
  {
    id: "12229633709",
    name: "핑크드림 미니백 에코백 파우치",
    price: 12000,
    image: "https://shop1.phinf.naver.net/20250810_182/1754832056648IB0he_JPEG/26083476788222478_1110671517.jpg",
    category: "에코백",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/12229633709"
  },
  {
    id: "12229589620",
    name: "퐁퐁 에코백 숄더백 데일리백",
    price: 19000,
    image: "https://shop1.phinf.naver.net/20250810_289/1754829109115PiJN4_JPEG/17816776980950330_12219837.jpg",
    category: "에코백",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/12229589620"
  },
  {
    id: "12035231476",
    name: "몽글 동전지갑 카드지갑 미니파우치",
    price: 9900,
    image: "https://shop1.phinf.naver.net/20250629_69/1751204020408WH7kf_JPEG/85336948501767175_1920349175.jpg",
    category: "지갑",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/12035231476"
  },
  {
    id: "11884483528",
    name: "아이스크림 가게 B6 A5 다이어리커버",
    price: 18500,
    image: "https://shop-phinf.pstatic.net/20250525_127/1748172506899M3b68_JPEG/20139997000170087_1409510504.jpg",
    category: "다이어리",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/11884483528"
  },
  {
    id: "11412740579",
    name: "체리가조아 B6 A5 다이어리커버",
    price: 18000,
    image: "https://shop1.phinf.naver.net/20250130_157/1738241615592MaBXn_JPEG/85206870385011873_720663754.jpg",
    category: "다이어리",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/11412740579"
  },
  {
    id: "11412686518",
    name: "핑크드림 에코백 숄더백",
    price: 17000,
    image: "https://shop1.phinf.naver.net/20250130_297/1738241487548SLdke_JPEG/72374420657792040_774035018.jpg",
    category: "에코백",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/11412686518"
  },
  {
    id: "11116583968",
    name: "오동통 빈티지 핸들 파우치",
    price: 8500,
    image: "https://shop1.phinf.naver.net/20241106_257/1730855299163Fw9tR_JPEG/9474419869847728_1712755476.jpg",
    category: "파우치",
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/11116583968"
  }
];

export const storeInfo = {
  name: "멜팅치즈",
  tagline: "빈티지한 감성을 담은 핸드메이드 소품",
  description: "하나하나 정성스럽게 만든 다이어리 커버, 파우치, 에코백으로 당신의 일상에 따뜻한 감성을 더해보세요.",
  smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese",
  instagram: "@meltingcheese"
};
