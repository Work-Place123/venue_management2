This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
***Setting Up the Database with Prisma (MySQL) ,,,,(create virtual_venue database in phpmyadmin)**
1.Clone the repository (if not already done):
git clone <repo-url>
2.Install dependencies:
npm install
3.Set up the database connection:
*Open the .env file in the project root.

*Update the DATABASE_URL with your MySQL credentials:
DATABASE_URL="mysql://username:password@localhost:3306/your_database" (for our project Database url is "mysql://root:@localhost:3306/virtual_venue")
4.Run the database migration:
npx prisma migrate dev --name init
This will create the database schema in MySQL based on the Prisma schema (schema.prisma).
5.Generate the Prisma client (optional but recommended):
npx prisma generate
6.Check migration status (optional):
npx prisma migrate status
7.npm run dev
8.If you still encounter any issues, please contact the team lead for assistance
***************Happy coding**********************




Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
