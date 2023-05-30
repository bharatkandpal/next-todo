import Link from 'next/link'

export default async function Home() {
  const todos = [{ title: 'todo 1' }, { title: 'todo 2' }]
  console.log(todos)
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}