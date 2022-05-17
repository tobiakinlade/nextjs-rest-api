import prisma from 'lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const expenses = await prisma.expenses.findUnique({
      where: {
        id: parseInt(req.query.id),
      },
    });
    if (!expenses) {
      return res.status(404).json({ message: 'Not Found' });
    }
    res.status(200).json(expenses);
  }

  if (req.method === 'PUT') {
  }

  if (req.method === 'DELETE') {
  }
}
