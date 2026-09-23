import OrderDetailClient from './OrderDetailClient';

export function generateStaticParams() {
  return [
    { id: 'ORD-98421' },
    { id: 'ORD-98422' },
    { id: 'ORD-98423' },
    { id: 'ORD-98424' },
    { id: 'ORD-98425' },
    { id: 'demo' },
  ];
}

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  return <OrderDetailClient id={params.id} />;
}