export const STARGAZE_ENDPOINT =
  "https://graphql.mainnet.stargaze-apis.com/graphql";

export const STARGAZE_POOL =
  "stars1w5zlwwz5p0jth89ps64tt9mu9lzx6w450acshlu4tce856f3uxyq3y4sq9";

export const SNEAKY_TOKEN_CHAINS = {
  "osmosis-1":
    "ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F",
  "stargaze-1": "factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky",
} as const;

export const MAIN_COLLECTION_ADDRS = [
  // Sneaky Animals
  "stars1429tk3pj6nrta2y34gx0njrm8zum53v05dyjawlsk6w84wqugsnshf2n3x",
  // Sneaky Transformation
  "stars1axa9hddj5p5vr4agt9ftr957fkxl2accss4e0x70u3882rc2zt5q97gvxs",
  // Sneaky Stuff
  "stars1luw5em4jmprng78v2jrzp7p66lzetugdvvq38d9t0gylsut23dpqe686z3",
  // Sneaky Food
  "stars10s9s7hvup5j5e243fgtlp2zwtvshyhwg865gplhp9u096p4ver0qncx8lt",
];

export const OPEN_EDITION_COLLECTION_ADDRS = [
  // Unlucky Pig 1
  "stars1jfpej6sts325ww78u4m5g8gxdwuuw08rcspr707c43784jcrlqjs75ftxk",
  // Sneaky World
  "stars1zyh20slfdscdxdxqxmfhjnt3zdeh3hmv0zhlmtrp7p5zvntturasdhw057",
  // Sneaky Riddler
  "stars1n4vuu7kr5cv793jh8t0htnr5wvkjywg452yp6y03f7q6w3747aaqxfkjch",
  // Sneaky Heaven
  "stars1fpyg089fandugsvc6yhv3dlqtuhk2prh6f3xmxydj7mhdacaqv5svngnlk",
  // Sneaky Hell
  "stars18ahxl5x0pmzg6hsrjy5d7kam9azxf53chm69pqn3trzx5as920vq20ts87",
] as const;

export type OpenEditionCollectionAddr =
  (typeof OPEN_EDITION_COLLECTION_ADDRS)[number];

export const PLUSHIE_COLLECTION_ADDRS = [
  // Sneaky Plushies - Happy Pig
  "stars134kzejtqk2hpfzvzfh8lz9dreuf40lyz2ucz3qpls6mmczr2dwlqx3t0t8",
  // Sneaky Plushies - Bitgirl
  "stars170ff0vmv8adyp0gsxecpmaewfhg2w00pkdkpag3kwsh4yw8ftc4saxhy4x",
  // Sneaky Plushies - Jack Penguin
  "stars1ej3e2nhjgwhtmlsec3vkzw49566syyccl3f75ujr8m6t22ue07sqwz4vmp",
  // Sneaky Plushies - Celestine Sloth 884
  "stars1yrrhhz9k5tg9g76pfzu3px49urhyh7kn3tgp39n337chz29cpqqqqcaqcp",
  // Mad Scientist Plushie
  "stars18vf62p06ku5wzwqe2lr2jmzglhfvhdyal4p98emxf7x6q5v7u3cq5fxn23",
];

// The order of this array is the order in which the collections will render on the app
export const COLLECTION_ADDRS = [
  ...MAIN_COLLECTION_ADDRS,
  ...OPEN_EDITION_COLLECTION_ADDRS,
  ...PLUSHIE_COLLECTION_ADDRS,
];

export const OE_ASSET_URLS: Record<OpenEditionCollectionAddr, string> = {
  stars1jfpej6sts325ww78u4m5g8gxdwuuw08rcspr707c43784jcrlqjs75ftxk: `${process.env.PUBLIC_URL}/oe/unluckypig-asset.jpg`,
  stars1zyh20slfdscdxdxqxmfhjnt3zdeh3hmv0zhlmtrp7p5zvntturasdhw057: `${process.env.PUBLIC_URL}/oe/sneakyworld-asset.jpg`,
  stars1n4vuu7kr5cv793jh8t0htnr5wvkjywg452yp6y03f7q6w3747aaqxfkjch: `${process.env.PUBLIC_URL}/oe/sneakyriddler-asset.jpg`,
  stars1fpyg089fandugsvc6yhv3dlqtuhk2prh6f3xmxydj7mhdacaqv5svngnlk: `${process.env.PUBLIC_URL}/oe/sneakyheaven-asset.jpg`,
  stars18ahxl5x0pmzg6hsrjy5d7kam9azxf53chm69pqn3trzx5as920vq20ts87: `${process.env.PUBLIC_URL}/oe/sneakyhell-asset.jpg`,
};

export const SNEAKY_RADIO_TRACKS: {
  src: string;
  cover: string;
  title: string;
}[] = [
  {
    src: `${process.env.PUBLIC_URL}/music/unicornqueen.aac`,
    cover: `${process.env.PUBLIC_URL}/music/unicornqueen.jpg`,
    title: "🎶Unicorn Queen🎶",
  },
  {
    src: `${process.env.PUBLIC_URL}/music/thegrandescape.aac`,
    cover: `${process.env.PUBLIC_URL}/music/thegrandescape.jpg`,
    title: "🎵The Grand Escape🎵",
  },
  {
    src: `${process.env.PUBLIC_URL}/music/animalechoes.aac`,
    cover: `${process.env.PUBLIC_URL}/music/animalechoes.jpg`,
    title: "🎶Animal Echoes🎶",
  },
  {
    src: `${process.env.PUBLIC_URL}/music/smokersclub.aac`,
    cover: `${process.env.PUBLIC_URL}/music/smokersclub.jpg`,
    title: "🎶Smokers Club🎶",
  },
  {
    src: `${process.env.PUBLIC_URL}/music/dremmettbrown.aac`,
    cover: `${process.env.PUBLIC_URL}/music/dremmettbrown.jpg`,
    title: "🎶Dr. Emmett Brown🎶",
  },
];

export const isOECollectionAddress = (
  address: string
): address is OpenEditionCollectionAddr =>
  OPEN_EDITION_COLLECTION_ADDRS.includes(address as OpenEditionCollectionAddr);

export type StoreItem = {
  image: string;
  name: string;
  // which nft it's based on. e.g. Celestine Sloth #884 or Sneaky Animals #818 + #303
  basedOn: string;
  isBundleDeal: boolean;
  shippingStart?: Date;
  // if this date is in the future we will show the item as presale
  presaleUntil?: Date;
  // if this is set, we will show a link to the buy the product via crypto
  stargazeLink?: string;
  // if this is set, we will show a link to the buy the product via stripe
  stripeLink?: string;
  note?: string;
};

export const STORE_PLUSHIES: StoreItem[] = [
  {
    image: `${process.env.PUBLIC_URL}/store/sloth.png`,
    name: "Celestine Sloth Plushie",
    basedOn: "Celestine Sloth #884",
    isBundleDeal: false,
    stripeLink: "https://buy.stripe.com/eVa3eN5mc8CMgoMfZ5",
    stargazeLink:
      "https://www.stargaze.zone/l/stars1yrrhhz9k5tg9g76pfzu3px49urhyh7kn3tgp39n337chz29cpqqqqcaqcp",
    shippingStart: new Date("2024-12-31"),
    presaleUntil: new Date("2024-10-23"),
    note: "(Includes hands and feet. 😝)",
  },
  {
    image: `${process.env.PUBLIC_URL}/store/mad-scientist.png`,
    name: "Mad Scientist",
    basedOn: "Mad Scientist NFTs",
    isBundleDeal: false,
    stripeLink: "https://buy.stripe.com/14k2aJg0QcT2egE3cl",
    stargazeLink:
      "https://www.stargaze.zone/l/stars18vf62p06ku5wzwqe2lr2jmzglhfvhdyal4p98emxf7x6q5v7u3cq5fxn23",
  },
  {
    image: `${process.env.PUBLIC_URL}/store/happy-pig.png`,
    name: "Happy Pig",
    basedOn: "Sneaky Animals #818",
    isBundleDeal: false,
    stargazeLink: "https://www.stargaze.zone/l/happypig",
    stripeLink: "https://buy.stripe.com/eVa2aJ9Cs06g7Sg145",
  },
  {
    image: `${process.env.PUBLIC_URL}/store/bitgirl.png`,
    name: "Bitgirl",
    basedOn: "Sneaky Transformation #103",
    isBundleDeal: false,
    stargazeLink: "https://www.stargaze.zone/l/bitgirl",
    stripeLink: "https://buy.stripe.com/fZe3eN01SbOYa0o146",
  },
  {
    image: `${process.env.PUBLIC_URL}/store/jack.png`,
    name: "Jack Penguin Plushie",
    basedOn: "Sneaky Animals #300",
    isBundleDeal: false,
    stargazeLink:
      "https://www.stargaze.zone/l/stars1ej3e2nhjgwhtmlsec3vkzw49566syyccl3f75ujr8m6t22ue07sqwz4vmp",
    stripeLink: "https://buy.stripe.com/bIY02BdSI6uEfkIbIM",
  },
  {
    image: `${process.env.PUBLIC_URL}/store/jack-and-happy-pig.png`,
    name: "Jack Penguin & Happy Pig Bundle",
    basedOn: "Sneaky Animals #300 & #818",
    isBundleDeal: true,
    stripeLink: "https://buy.stripe.com/8wM2aJg0QdX66OccMR",
  },
];
