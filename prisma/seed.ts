const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: 'Tシャツ',
      description: 'シンプルな白Tシャツ',
      price: 2000,
      imageUrl: 'https://placehold.jp/150x150.png?text=T-shirt',
    },
    {
      name: 'ジーンズ',
      description: 'カジュアルなデニムジーンズ',
      price: 5000,
      imageUrl: 'https://placehold.jp/150x150.png?text=Jeans',
    },
    {
      name: 'スニーカー',
      description: '歩きやすいスニーカー',
      price: 8000,
      imageUrl: 'https://placehold.jp/150x150.png?text=Sneaker',
    },
    {
      name: 'ジャケット',
      description: '秋冬にぴったりのジャケット',
      price: 12000,
      imageUrl: 'https://placehold.jp/150x150.png?text=Jacket',
    },
    {
      name: '帽子',
      description: 'おしゃれなキャップ',
      price: 2500,
      imageUrl: 'https://placehold.jp/150x150.png?text=Hat',
    },
  ];
  for (const data of products) {
    await prisma.product.upsert({
      where: { name: data.name },
      update: {
        description: data.description,
        price: data.price,
        imageUrl: data.imageUrl,
      },
      create: data,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
