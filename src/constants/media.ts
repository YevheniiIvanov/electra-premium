/** Кілька URL Unsplash (ixlib) на кожне зображення — резерв при помилці завантаження */

const u = (path: string, w: number) =>
  `https://images.unsplash.com/${path}?ixlib=rb-4.1.0&auto=format&fit=crop&w=${w}&q=85`

export const HERO_IMAGES = [
  u('photo-1600607687939-ce8a6c25118c', 2800),
  u('photo-1600210492493-0946911123ea', 2800),
  u('photo-1600566753086-00f18fb6b3ea', 2800),
]

export const ABOUT_IMAGES = [
  u('photo-1621905251918-48416bd8575a', 1800),
  u('photo-1621905251189-08b45d6a929e', 1800),
  u('photo-1558618666-fcd25c85cd64', 1800),
]

export const PORTFOLIO_IMAGES = {
  apartment: [
    u('photo-1600210492493-0946911123ea', 2400),
    u('photo-1600566753190-bcd174b5bdd0', 2400),
    u('photo-1600607687939-ce8a6c25118c', 2400),
  ],
  house: [
    u('photo-1600585154526-990dced4db0d', 2400),
    u('photo-1600596542815-ffad4c1539a9', 2400),
    u('photo-1600566753086-00f18fb6b3ea', 2400),
  ],
  office: [
    u('photo-1497366811353-f06896804f69', 2400),
    u('photo-1497366216548-37526070297c', 2400),
    u('photo-1524758631624-e2822e304c36', 2400),
  ],
  retail: [
    u('photo-1441986300917-64674bd600d8', 2400),
    u('photo-1604719312566-8912e9227c6a', 2400),
    u('photo-1556742049-0cfed4f6a45d', 2400),
  ],
} as const
