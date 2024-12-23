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
];

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

export const STARGAZE_ENDPOINT =
  "https://graphql.mainnet.stargaze-apis.com/graphql";

export const STARGAZE_POOL =
  "stars1w5zlwwz5p0jth89ps64tt9mu9lzx6w450acshlu4tce856f3uxyq3y4sq9";
