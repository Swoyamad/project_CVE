import { Link } from "@inertiajs/react";

export default function Dashboard({ children }) {
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
                <h2 className="text-xl font-bold mb-4">
                    <Link
                        href={route("dashboard")}
                        className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                        Dashboard
                    </Link>
                </h2>
                <nav>
                    <ul>
                        <li className="mb-2">
                            <Link
                                href={route("categories.index")}
                                className="block py-2 px-4 rounded hover:bg-gray-700"
                            >
                                Category
                            </Link>
                        </li>

                        <li className="mb-2">
                            <Link
                                href={route("tags.index")}
                                className="block py-2 px-4 rounded hover:bg-gray-700"
                            >
                                Tag
                            </Link>
                        </li>

                        <li className="mb-2">
                            <Link
                                href={route("news.index")}
                                className="block py-2 px-4 rounded hover:bg-gray-700"
                            >
                                News
                            </Link>
                        </li>

                        <li className="mb-2">
                            <Link
                                href={route("profile.edit")}
                                className="block py-2 px-4 rounded hover:bg-gray-700"
                            >
                                Profile
                            </Link>
                        </li>

                        <li className="mb-2">
                            <Link
                                href={route("users.index")}
                                className="block py-2 px-4 rounded hover:bg-gray-700"
                            >
                                Users
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-100">{children}</main>
        </div>
    );
}
