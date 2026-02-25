import prisma from "../src/lib/prisma";

async function main() {
    const user = await prisma.user.create({
        data: {
            email: "alice@example.com",
            posts: {
                create: [
                    {
                        title: "First Post",
                        body: "Hello Prisma 7",
                    },
                ],
            },
        },
    });

    console.log("Seeded user:", user.email);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });