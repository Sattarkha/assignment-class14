import Link from "next/link";

export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await url.json();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">User List</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full px-4">
        {res.map((user: any) => (
          <div
            key={user.id}
            className="bg-white text-center rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {user.name}
            </h2>
            <p className="text-gray-600 mb-2">Username: {user.username}</p>
            <p className="text-gray-600 mb-2">Email: {user.email}</p>
            <p className="text-gray-600 mb-4">City: {user.address.city}</p>
            <Link
              href={`${user.id}`}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Visit Website
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
