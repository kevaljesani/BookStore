export default function CartItem({ item, remove }: any) {
  return (
    <div className="border p-2 flex justify-between">
      <p>{item.title}</p>
      <button onClick={() => remove(item.id)}>Remove</button>
    </div>
  );
}