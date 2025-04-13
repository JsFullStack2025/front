export default async function Page({ params }: { params: Promise<{ slug: string }>}) {
  const { slug } = await params
  return <div>Shared card: {slug}</div>
}